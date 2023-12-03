from flask import Flask, request, request, jsonify
from google.cloud import speech
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
@app.route("/hello", methods=['GET'])
def hello_world():
    return {'message': 'Hello, World!'}

@app.route("/ai_response", methods=['POST'])
def ai_response():
    try:
        # Assuming transcribe_audio raises an exception on failure
        transcript = transcribe_audio()
        
        # Check if the transcript is empty or None
        if not transcript:
            return jsonify({"error": "Transcription failed or returned empty result"}), 400

        # Assuming openai_call raises an exception on failure
        response = openai_call(transcript)

        # Check if the OpenAI response is empty or None
        if not response:
            return jsonify({"error": "OpenAI API call failed or returned empty result"}), 500
        
        text = response.content
        print('ai response', text)
        return text, 200

    except Exception as e:
        # General exception catch, logging the exception could be helpful
        print(f"Error occurred: {e}")
        return jsonify({"error": "An error occurred processing your request"}), 500
    

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    # Check if the post request has the file part
    print('start transcribe audio function')
    if 'file' not in request.files:
        return 'No file part', 400

    file = request.files['file']
    print('finish getting file')

    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    if file.filename == '':
        return 'No selected file', 400

    if file:
        # Call the transcribe function
        print('start transcribe file function')
        response = transcribe_file(file)
        transcript = response.results[0].alternatives[0].transcript
        print('transcript', transcript)
        # transcripts = [result.alternatives[0].transcript for result in response.results]
        # return jsonify(transcripts)
        return transcript, 200

def transcribe_file(audio_file) -> speech.RecognizeResponse:
    """Transcribe the given audio file."""
    client = speech.SpeechClient()

    content = audio_file.read()

    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.FLAC,
        sample_rate_hertz=48000,
        audio_channel_count=2,
        language_code="es-ES",
    )

    response = client.recognize(config=config, audio=audio)
    print('this is the response from google api', response)
    if not response.results:
        print("No results returned from the speech recognition service.")
    else:
        for result in response.results:
            print(f"Transcript: {result.alternatives[0].transcript}")
    return response

openai.api_key = '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'

def openai_call(transcript):
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        temperature=0.7,
        messages=[
            {
                "role": "user",
                "content": f"Respond to the following text: {transcript}"
            }
        ],
    )
    return response.choices[0].message

if __name__ == '__main__':
    app.run(debug=True)
