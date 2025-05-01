document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");
    const classesList = document.getElementById("classes-list");
  
    // Example classes data
    const danceClasses = [
      { name: "Salsa Beginners", time: "Monday 6pm", instructor: "Jane Doe" },
      { name: "Hip Hop Intermediate", time: "Wednesday 5pm", instructor: "Mark Lee" },
      { name: "Ballet for Kids", time: "Saturday 10am", instructor: "Clara Smith" },
      { name: "Afrobeats Groove", time: "Friday 7pm", instructor: "Kwame Jones" }
    ];
  
    // Save to localStorage (if not already there)
    if (!localStorage.getItem("danceClasses")) {
      localStorage.setItem("danceClasses", JSON.stringify(danceClasses));
    }
  
    // Show classes on classes.html
    if (classesList) {
      const savedClasses = JSON.parse(localStorage.getItem("danceClasses"));
      savedClasses.forEach(danceClass => {
        const div = document.createElement("div");
        div.className = "class-card";
        div.innerHTML = `
          <h3>${danceClass.name}</h3>
          <p><strong>Time:</strong> ${danceClass.time}</p>
          <p><strong>Instructor:</strong> ${danceClass.instructor}</p>
        `;
        classesList.appendChild(div);
      });
    }
  
    // Handle form submission
    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
  
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const style = document.getElementById("style").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message");
  
        if (!name || !email || !style || !date) {
          message.textContent = "Please fill in all fields.";
          message.style.color = "red";
          return;
        }
  
        const booking = { name, email, style, date };
        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(bookings));
  
        message.textContent = "Registration successful!";
        message.style.color = "green";
        form.reset();
      });
    }
  });
  