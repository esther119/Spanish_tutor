from flask import Flask, request, request, jsonify, Response
from google.cloud import speech
from google.cloud import texttospeech
import openai
import os

app = Flask(__name__)

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = '/Users/swimmingcircle/Code/spanish_tutor/back-end/GOOGLE_APPLICATION_CREDENTIALS.json'


@app.route('/verify-credentials')
def verify_credentials():
    cred_path = os.environ.get('GOOGLE_APPLICATION_CREDENTIALS')
    if cred_path and os.path.exists(cred_path):
        return f"Credential file found at {cred_path}"
    else:
        return "Credential file not found"


# Define a route for the root URL ("/")
@app.route("/hello", methods=['POST'])
def hello_world():
    return {'message': 'Hello, World!'}

@app.route("/ai_response", methods=['POST'])
def ai_response():
    try:
        # Assuming transcribe_audio raises an exception on failure
        transcript = transcribe_audio()
        if transcript[1] == 200:  # Checking if the status code is 200
            transcript = transcript[0].get_json()  # This should give you the transcript in JSON format
            print("Transcript:", transcript)
        else:
            print("Transcription failed with status code:", transcript[1])        
        

        # Assuming openai_call raises an exception on failure
        response = openai_call(transcript)
        # Check if the OpenAI response is empty or None
        if not response:
            return jsonify({"error": "OpenAI API call failed or returned empty result"}), 500        
        text = response.content
        print('ai response', text)
        audio_output = synthesize_text(text)
        
        return audio_output, 200

    except Exception as e:
        # General exception catch, logging the exception could be helpful
        print(f"Error occurred: {e}")
        return jsonify({"error": "An error occurred processing your request"}), 500
    

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    try:
        # Check if the post request has the file part
        print('start transcribe audio function')
        if 'file' not in request.files:
            return jsonify('No file'), 400

        file = request.files['file']
        print('finish getting file')
        # Get the content type (MIME type) of the file
        file_type = file.content_type
        print('File type:', file_type)        

        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            return jsonify('No selected file'), 400

        if file:
            # Call the transcribe function
            print('start transcribe file function')
            response = transcribe_file(file)
            print('finish transcribe file function', response)
            if response.results: 
                transcript = response.results[0].alternatives[0].transcript
                print('transcript', transcript)
                return jsonify(transcript), 200


    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"error": str(e)}), 500

def transcribe_file(audio_file) -> speech.RecognizeResponse:
    """Transcribe the given audio file."""
    try:
        client = speech.SpeechClient()

        content = audio_file.read()
        # print('content', content)

        audio = speech.RecognitionAudio(content=content)
        config = speech.RecognitionConfig(
            encoding=speech.RecognitionConfig.AudioEncoding.WEBM_OPUS,
            sample_rate_hertz=48000,
            audio_channel_count=1,
            language_code="es-ES",
            model = 'latest_short',
        )

        response = client.recognize(config=config, audio=audio)
        print('this is the response from google api', response)
        if not response.results:
            print("No results returned from the speech recognition service.")
        else:
            for result in response.results:
                print(f"Transcript: {result.alternatives[0].transcript}")
        return response
    except Exception as e:
        print(f"An error occurred: {str(e)}")


@app.route('/chat', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data.get('message')

    messages = [
        {"role": "system", "content": "You are my friend that have a conversation with me."},
        {"role": "user", "content": user_message}
    ]

    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )

    chat_message = response.choices[0].message.content
    return jsonify({"response": chat_message})

def openai_call(transcript):
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        temperature=0.7,
        messages=[
            {
                "role": "system",
                "content": "Eres mi amigo de España. Eres amigo de España. Le respondes a tu amigo en español fácil."
            }, 
            {
                "role": "user",
                "content": f"{transcript}"
            }
        ],
    )
    return response.choices[0].message


@app.route('/textToSpeech', methods=['POST'])
def synthesize_text(text='Hola, me llamo Juan'):
    """Synthesizes speech from the input string of text."""
    

    client = texttospeech.TextToSpeechClient()

    input_text = texttospeech.SynthesisInput(text=text)

    # Note: the voice can also be specified by name.
    # Names of voices can be retrieved with client.list_voices().
    voice = texttospeech.VoiceSelectionParams(
        language_code="es-ES",
        name="es-ES-Standard-B",
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    response = client.synthesize_speech(
        request={"input": input_text, "voice": voice, "audio_config": audio_config}
    )
    # print('text to speech response', response)
    # The response's audio_content is binary.
    with open("output.mp3", "wb") as out:
        out.write(response.audio_content)
        print('Audio content written to file "output.mp3"')
    return Response(response.audio_content, content_type="audio/mp3")


if __name__ == '__main__':
    app.run(debug=True)
