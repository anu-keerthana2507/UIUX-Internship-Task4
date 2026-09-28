document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let studentId = document.getElementById("studentId").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (studentId === "" || password === "") {
        message.textContent = "Please enter Student ID and Password.";
        message.style.color = "red";
    }
    else if (studentId === "STU101" && password === "12345") {
        message.textContent = "Login successful!";
        message.style.color = "green";
    }
    else {
        message.textContent = "Invalid Student ID or Password.";
        message.style.color = "red";
    }

});