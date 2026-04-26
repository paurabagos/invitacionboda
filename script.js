// FAQ accordion
document.querySelectorAll(".faq-item button").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// RSVP form
document.getElementById("rsvpForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("RSVP submitted!");
});