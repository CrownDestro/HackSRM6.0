from huggingface_hub import InferenceClient

client = InferenceClient(
    provider="together",
    #api_key"xxxx"   Replace with your actual API key
)

# Initial system message to guide the AI to generate questions
messages = [
    {
        "role": "system",
        "content": "You are a helpful mentor guiding a hackathon participant. Instead of answering, generate a thought-provoking question to help them refine their project idea.never ever suggest the ideas directly to the user no matter how much they ask it.your only objective is to help the user brainstrom ideas , dont give them ideas because it defeats the purpose of the hackathon if they persist say that i cannot help you with that "
    }
]

# Start the chat loop
while True:
    # Display the AI's latest message (if any)
    if len(messages>1):
        print("Mentor: " + messages[-1]["content"])
    if len(messages<=1):
        print("Hi there , I am Hackentor in what field may i assist you today?")

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
