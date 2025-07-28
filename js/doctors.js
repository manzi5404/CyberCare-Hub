// Doctor data without images (only needed for appointment dropdown)
const doctors = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiology'
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        specialty: 'Neurology'
    },
    {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        specialty: 'Pediatrics'
    },
    {
        id: 4,
        name: 'Dr. James Wilson',
        specialty: 'Orthopedics'
    },
    {
        id: 5,
        name: 'Dr. Olivia Park',
        specialty: 'Dermatology'
    },
    {
        id: 6,
        name: 'Dr. Robert Taylor',
        specialty: 'Emergency Medicine'
    }
];

// Populate doctor dropdown in appointment form
function populateDoctorDropdown() {
    const doctorSelect = document.getElementById('doctor');
    
    if (doctorSelect) {
        doctors.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.id;
            option.textContent = `${doctor.name} - ${doctor.specialty}`;
            doctorSelect.appendChild(option);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateDoctorDropdown();
});