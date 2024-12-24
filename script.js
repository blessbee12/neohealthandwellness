document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (!name || !email || !rating || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission (You can replace this with actual API calls or backend logic)
    console.log('Form Submitted:', { name, email, rating, message });
    alert('Thank you for your feedback!');

    // Reset the form
    document.getElementById('feedbackForm').reset();
});
