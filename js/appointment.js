// DOM Elements
const appointmentForm = document.getElementById('appointment-form');
const confirmationModal = document.getElementById('confirmation-modal');
const modalClose = document.querySelector('.modal__close');

// Form submission
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const doctor = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        
        if (!name || !email || !phone || !doctor || !date || !time) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Create appointment object
        const appointment = {
            id: Date.now(),
            name,
            email,
            phone,
            doctorId: parseInt(doctor),
            date,
            time,
            message: document.getElementById('message').value,
            createdAt: new Date().toISOString()
        };
        
        // Save to localStorage
        saveAppointment(appointment);
        
        // Show confirmation modal
        confirmationModal.style.display = 'flex';
        
        // Reset form
        appointmentForm.reset();
    });
}

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        confirmationModal.style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});

// Save appointment to localStorage
function saveAppointment(appointment) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Any initialization code for appointment page
});