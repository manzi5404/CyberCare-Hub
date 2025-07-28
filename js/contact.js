// DOM Elements
const contactForm = document.getElementById('contact-form');

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Validate email format
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // In a real application, you would send this data to a server
        console.log('Contact form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Any initialization code for contact page
});