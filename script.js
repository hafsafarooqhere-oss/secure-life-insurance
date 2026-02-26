document.addEventListener('DOMContentLoaded', function() { 
    // Select the form inside the contact section
    const form = document.getElementById('contact-section').querySelector('form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Get input values and trim extra spaces
        const name = form.querySelector('input[placeholder="Full Name"]').value.trim();
        const email = form.querySelector('input[placeholder="Email Address"]').value.trim();
        const phone = form.querySelector('input[placeholder="Phone Number"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        // Regex patterns for validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email check
        const phonePattern = /^\d{10,15}$/; // only 10-15 digits allowed

        // Validation
        if (name === "") {
            alert("Please enter your full name.");
            return;
        }
        if (email === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (phone === "" || !phonePattern.test(phone)) {
            alert("Please enter a valid phone number (10-15 digits).");
            return;
        }
        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        // If all inputs are valid
        alert("Form submitted successfully! ✅");

        // Reset the form
        form.reset();
    });
});