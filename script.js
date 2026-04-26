// FAQ accordion
document.querySelectorAll(".faq-item button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// RSVP form
document.getElementById("rsvpForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("RSVP submitted!");
});

// Custom Code
const btn = document.getElementById("deletebtn");
const pwdinput = document.getElementById("passwordinput");
const divi = document.getElementById("introdiv");
const correctPassword = "leya";
const inputField = document.getElementById("userInput");
const displaySpan = document.getElementById("displaySpan");

pwdinput.addEventListener("input", () => {
  // Check if the current input value matches the correct password
  if (pwdinput.value === correctPassword) {
    btn.disabled = false; // Enable the button
  } else {
    btn.disabled = true; // Keep/re-disable if incorrect
  }
});

btn.addEventListener("click", () => {
  divi.remove();
  displaySpan.textContent = inputField.value;
});
