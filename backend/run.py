from flask import Flask, request, jsonify
from huggingface_hub import InferenceClient
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Initialize the InferenceClient
client = InferenceClient(
    provider="together",
    #key"  # Replace with your actual API key
)

# Initial system message to guide the AI to generate questions
messages = [
    {
        "role": "system",
        "content": "You are a helpful mentor guiding a hackathon participant. Instead of answering, generate a thought-provoking question to help them refine their project idea.do not give the user direct ideas or projects they can do because this defeats the purpose of the hackathon if they ask just say i cant help you with that"
    }
]

# Track the initial greeting per session using a dictionary
sessions = {}

@app.route('/initial', methods=['GET'])
def initial():
    return jsonify({"message": ""})

@app.route('/getReply', methods=['POST'])
def getReply():
    session_id = request.json.get("session_id")
    if session_id not in sessions:
        sessions[session_id] = True
        return jsonify({"response": ""})

    # Get the user's input from the request
    user_input = request.json.get("input", "").strip()

    # If no input, return an error response
    if not user_input:
        return jsonify({"error": "Input is required"}), 400

    # Add the user's message to the conversation
    messages.append({"role": "user", "content": user_input})

    # Get AI-generated follow-up question or reply
    completion = client.chat.completions.create(
        model="mistralai/Mistral-7B-Instruct-v0.3",
        messages=messages,
        max_tokens=100
    )

    # Extract the AI's reply
    ai_reply = completion.choices[0].message["content"]

    # Append the AI's reply as 'assistant' role
    messages.append({"role": "assistant", "content": ai_reply})

    # Send the AI's reply as the response
    return jsonify({"response": ai_reply})

if __name__ == '__main__':
    app.run(debug=True)
s