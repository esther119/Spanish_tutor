import base64

file_path = './tmp.txt'
with open(file_path, 'r') as file:
    base64_string = file.read()


# Your Base64 encoded string
# base64_string = "YOUR_BASE64_ENCODED_STRING"

# Decode the Base64 string
decoded_bytes = base64.b64decode(base64_string)

# Save the decoded bytes to a file
with open('output_audio_file.mp3', 'wb') as file_to_save:
    file_to_save.write(decoded_bytes)
