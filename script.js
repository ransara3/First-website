// Dynamic Greeting Message
function showGreeting() {
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning!";
  } else if (hours < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  document.getElementById("greeting").innerText = greeting;
}

// Toggle Background Color
let isDarkMode = false;
function toggleBackground() {
  const body = document.body;
  if (isDarkMode) {
    body.style.backgroundColor = "#f4f4f4";
    body.style.color = "#000";
  } else {
    body.style.backgroundColor = "#222";
    body.style.color = "#fff";
  }
  isDarkMode = !isDarkMode;
}

// Add Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  showGreeting();
  document.getElementById("toggle-btn").addEventListener("click", toggleBackground);
});
