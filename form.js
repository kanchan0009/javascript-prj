document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if(name === "") {
        alert("Please enter your name");
        return;
    }

    // Basic email check
    if(!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email");
        return;
    }

    if(password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Form submitted successfully!");
    this.reset(); // clear form
});