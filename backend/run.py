from huggingface_hub import InferenceClient

client = InferenceClient(
    provider="together",
     # Replace with your actual API key name it as api_key
)

# Initial system message to guide the AI to generate questions
messages = [
    {
        "role": "system",
        "content": "You are a helpful mentor guiding a hackathon participant. Instead of answering, generate a thought-provoking question to help them refine their project idea."
    }
]

# Start the chat loop
while True:
    # Display the AI's latest message (if any)
    print("Mentor: " + messages[-1]["content"])

    # Get the user's input
    user_input = input("You: ").strip()

    # If user wants to exit, break the loop
    if user_input.lower() in ["exit", "quit"]:
        print("👋 Exiting the chat. Good luck with your hackathon!")
        break

    # Add the user's message to the conversation
    messages.append({"role": "user", "content": user_input})

    # Get AI-generated follow-up question
    completion = client.chat.completions.create(
        model="mistralai/Mistral-7B-Instruct-v0.3",
        messages=messages,
        max_tokens=100
    )

    # Extract and print the AI's new question
    ai_reply = completion.choices[0].message["content"]
    messages.append({"role": "system", "content": ai_reply})
