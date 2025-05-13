from flask import Flask, render_template, jsonify
import json
import random

app = Flask(__name__)

# Load data from JSON file
def load_vocab_data():
    with open('vocab_data.json', 'r') as file:
        vocab_list = json.load(file)
    return vocab_list

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_word')
def get_word():
    vocab_list = load_vocab_data()
    word_data = random.choice(vocab_list)  # Random word selection
    return jsonify(word_data)

if __name__ == '__main__':
    app.run(debug=True)
