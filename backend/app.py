from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()
import os
import cohere
from cohere.responses.chat import StreamEvent
import PyPDF2
import random
from transformers import pipeline

app = Flask(__name__)
CORS(app)

# Set up your Cohere API key
co = cohere.Client(os.environ.get("COHERE_API_KEY"))

# Define your existing cohere_response_generator function here
def cohere_response_generator(prompt):
    # ... (existing code for generating responses)
    response = "This is a generated response from Cohere AI. How can I assist you further?"

    # You can add more logic or processing here based on your specific needs
    return response
@app.route('/')
def home():
    return render_template('index.html')

# Function to generate a summary and questions for a given text
def generate_summary_and_questions(text):
    # Initialize the summarization and question-answering pipelines
    summarizer = pipeline("summarization")
    question_answerer = pipeline("question-answering")

    # Generate a summary of the text
    summary = summarizer(text, max_length=100, min_length=30, do_sample=False)[0]['summary_text']

    # Generate a list of questions based on the text
    questions = []
    for _ in range(5):
        question = question_answerer(text=text, question="What is this text about?")['answer']
        questions.append(question)

    return summary, questions

# Function to generate a quiz based on the extracted text
def generate_quiz(text):
    summary, questions = generate_summary_and_questions(text)

    # Extract the subject name from the summary
    subject = summary.split(". ")[0]

    # Generate a list of random questions
    random_questions = random.choices(questions, k=5)

    quiz = {
        "subject": subject,
        "questions": random_questions
    }

    return quiz

# Route to generate a quiz based on uploaded PDF
@app.route('/generate_quiz', methods=['POST'])
def generate_quiz_from_pdf():
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"})

    try:
        pdf_reader = PyPDF2.PdfReader(file)
        text = ''
        for page_num in range(pdf_reader.numPages):
            page = pdf_reader.getPage(page_num)
            text += page.extractText()

        quiz = generate_quiz(text)
        return jsonify(quiz)

    except Exception as e:
        return jsonify({"error": str(e)})

# Route to generate a quiz based on text input
@app.route('/generate_quiz_from_text', methods=['POST'])
def generate_quiz_from_text():
    text = request.form.get('text')
    if not text:
        return jsonify({"error": "No text provided"})

    quiz = generate_quiz(text)
    return jsonify(quiz)

if __name__ == '__main__':
    app.run(debug=True)