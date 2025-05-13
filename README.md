# 📚 Vocab Booster

**Vocab Booster** is a web application designed to help users expand their English vocabulary. It presents users with words, their meanings, and example sentences. The data is stored in a **JSON file**, making the project lightweight and easy to maintain.

## ✨ Features

- 🧠 Displays vocabulary words with meanings and usage examples
- 💡 Simple and clean UI with black & white theme
- 📩 Pop-up welcome message when the site loads
- 🎯 "Start" button fetches and displays words dynamically
- 📂 Vocabulary data is stored in a `vocab_data.json` file

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Flask (Python)
- **Data Storage:** JSON (`vocab_data.json`)

## 📁 Project Structure
Vocab-Booster/
├── static/
│ ├── script.js # Handles front-end interactivity
│ └── style.css # Website styling
├── templates/
│ └── index.html # Main HTML file
├── vocab_data.json # Contains word, meaning, and example
├── app.py # Flask backend to serve the webpage and data
└── README.md # Project documentation