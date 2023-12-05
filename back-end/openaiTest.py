import openai
def openai_call(transcript):
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        temperature=0.7,
        messages=[
            {
                "role": "system",
                "content": "Eres un amigo de España. Estás teniendo una conversación con tu amigo. Usa española fácil."
            }, 
            {
                "role": "user",
                "content": f"{transcript}"
            }
        ],
    )
    return response.choices[0].message.content

if __name__ == "__main__":
    print(openai_call('Solo funciona de hablar en español.'))
