from huggingface_hub import InferenceClient
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(_name_)
CORS(app)

# Initialize Hugging Face API Client
client = InferenceClient(
    provider="together",  # Specify provider if needed
    # Replace with your real API key
)

# Function to summarize text using Hugging Face API
def summarize_text(text):
    # Improved prompt for structured, step-wise elaboration
    prompt = (
        f"Idea: {text}\n\n"
        f"Expand this idea into a structured, step-by-step, point-wise breakdown. Clearly explain how it should work.\n"
        f"Provide detailed, actionable steps:\n\n"
        f"1."
    )

    # Define the request payload
    messages = [
        {"role": "user", "content": prompt}
    ]

    try:
        # Call Hugging Face API for text generation
        completion = client.chat.completions.create(
            model="mistralai/Mistral-7B-Instruct-v0.3",  # Better for structured responses
            messages=messages,
            max_tokens=500
        )

        # Extract the generated response
        summary_text = completion.choices[0].message["content"]
        return summary_text

    except Exception as e:
        return f"Error: {str(e)}"

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.json
    idea_text = data.get("idea", "")

    if not idea_text:
        return jsonify({"error": "No text provided"}), 400

    summary = summarize_text(idea_text)
    return jsonify({"summary": summary})

if _name_ == "_main_":
    app.run(host="0.0.0.0", port=5000, debug=True)