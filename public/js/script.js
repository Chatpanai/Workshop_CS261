document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can customize this)
    if (username === '' || password === '') {
        document.getElementById('message').textContent = 'Please fill in both fields.';
    } else {
        document.getElementById('message').textContent = `Welcome, ${username}!`;
    }
});
