// 1. Get the form from the page
const form = document.getElementById("register-form");

// 2. Listen for the submit event
form.addEventListener("submit", function (event) {
  // 3. Stop the page from refreshing
  event.preventDefault();

  // 4. Show the success message
  alert("Registration successful!");

  // 5. Clear the form fields
  form.reset();
});