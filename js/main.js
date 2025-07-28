// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const header = document.querySelector('.header');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navList.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (navList.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        header.style.height = '100vh';
    } else {
        document.body.style.overflow = '';
        header.style.height = '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navList.classList.remove('active');
        document.body.style.overflow = '';
        header.style.height = '';
    });

    // Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}


});
// For the emergency number click
document.querySelector('.emergency__button').addEventListener('click', function(e) {
    e.preventDefault();
    const phoneNumber = this.getAttribute('href').replace('tel:', '');
    if(confirm(`Call emergency number: ${phoneNumber}?`)) {
        // In a real app, this would initiate a phone call
        alert(`Calling ${phoneNumber}... Our emergency team will respond immediately.`);
        // window.location.href = this.getAttribute('href'); // Uncomment for actual calling
    }
});

