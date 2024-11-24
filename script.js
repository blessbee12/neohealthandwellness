document.addEventListener('DOMContentLoaded', () => {
    const heroButton = document.querySelector('.hero .btn');
    heroButton.addEventListener('click', () => {
        alert('Explore our services to find the best wound care for you!');
    });
});
document.getElementById('contactUsForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to the server

    // Hide the form and show the confirmation message
    document.getElementById('contactUsForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
});
