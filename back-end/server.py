from flask import Flask, request, jsonify
from google.cloud import speech
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
        print('this is the response', response)
        # transcripts = [result.alternatives[0].transcript for result in response.results]
        # return jsonify(transcripts)
        return "file received"
@app.route('/transcribe_file', methods=['POST'])
def transcribe_file(audio_file) -> speech.RecognizeResponse:
    """Transcribe the given audio file."""
    client = speech.SpeechClient()

    content = audio_file.read()

    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.FLAC,
        sample_rate_hertz=48000,
        audio_channel_count=1,
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

if __name__ == '__main__':
    app.run(debug=True)
