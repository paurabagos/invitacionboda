// FAQ accordion
document.querySelectorAll(".faq-item button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Custom Code
const btn = document.getElementById("deletebtn");
const pwdinput = document.getElementById("passwordinput");
const divi = document.getElementById("introdiv");
const correctPassword = "leya";
const inputField = document.getElementById("userInput");
const displaySpan = document.getElementById("displaySpan");
const pagebdy = document.getElementById("invite-bdy");

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
  pagebdy.style.margin = "20px";
  pagebdy.style.display = "revert";
  document.body.style.background = "#f5f5f5";
  document.documentElement.scrollTop = 0;
});

const isMobile = window.matchMedia("(max-width: 999px)");

// Check if the condition is currently met
if (isMobile.matches) {
  console.log("The screen is 999px wide or less.");
} else {
  console.log("The screen is wider than 999px.");
  document.body.innerHTML =
    "<p>Sorry, this website is meant to be viewed on your mobile device, we apologize for any inconvenience.</p><p>Paula & Manuel</p>";
}

document.getElementById("rsvpForm").addEventListener("submit", function (event) {
  const honeypot = document.getElementById("website").value;

  if (honeypot.length > 0) {
    console.warn("Spam detected!");
    event.preventDefault(); // Stop form submission
    console.log("Bot detected. Submission cancelled.");
  }
});
