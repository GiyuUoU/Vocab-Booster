let currentWord = null;
let isStarted = false;

async function fetchWord() {
  const response = await fetch('/get_word');
  currentWord = await response.json();
  showWord();
}

function showWord() {
  if (!currentWord) return;
  document.getElementById('word').innerText = currentWord.word;
  document.getElementById('meaning').innerHTML = "<strong>Definition : </strong>" + currentWord.meaning ;
  document.getElementById('example').innerHTML = "<strong>Example : </strong>" + currentWord.example ;
  document.getElementById('google-link').href = `https://www.google.com/search?q=define+${currentWord.word}`;
}

function toggleStart() {
  isStarted = !isStarted;
  const startContainer = document.getElementById('start-container');
  const wordSection = document.getElementById('word-section');

  if (isStarted) {
    // Hide the big center button after start
    startContainer.style.display = "none";

    // Show the word section
    wordSection.classList.remove("hidden");

    // Load first word
    fetchWord();
  } else {
    // Hide the word section
    wordSection.classList.add("hidden");

    // Optionally, show the start button again (if you want to allow restarting)
    startContainer.style.display = "flex";
  }
}


function nextWord() {
  fetchWord();
}

function handlePopup(choice) {
  document.getElementById('popup').style.display = 'none';
  if (choice === 'yes') {
    document.getElementById('start-container').style.display = 'flex';
  }
}

// Hook up event listeners (if not already in HTML)
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('start-stop-btn').addEventListener('click', toggleStart);
  document.getElementById('next-btn').addEventListener('click', nextWord);
  document.getElementById('google-btn').addEventListener('click', () => {
    window.open(document.getElementById('google-link').href, "_blank");
  });
  document.getElementById('stop-btn').addEventListener('click', toggleStart);
  document.getElementById('yes-btn').addEventListener('click', () => handlePopup('yes'));
  document.getElementById('no-btn').addEventListener('click', () => handlePopup('no'));
});
