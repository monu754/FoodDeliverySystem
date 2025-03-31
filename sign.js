document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get user input values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Create JSON object
        const userData = {
            name: name,
            email: email,
            password: password
        };

        // Send user data to backend
        fetch('http://localhost:8080/api/users/register', {  // Adjust based on your backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to register user');
            }
            return response.json();
        })
        .then(data => {
            alert(`User registered successfully: ${data.name}`);
            window.location.href = 'index.html';  // Redirect after signup (change if needed)
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Registration failed. Please try again.');
        });
    });
});
