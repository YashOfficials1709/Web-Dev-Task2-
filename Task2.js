// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");
  
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    feedback.textContent = "All fields are required.";
  } else if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Message sent successfully!";
    // Reset form
    this.reset();
  }
});

// To-Do List Logic
document.getElementById("addTaskBtn").addEventListener("click", function () {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button onclick="removeTask(this)">Remove</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
});

function removeTask(button) {
  button.parentElement.remove();
}
