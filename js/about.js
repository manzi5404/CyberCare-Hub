 
        // Animate stats counting
        function animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            const speed = 200;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const count = parseInt(stat.textContent);
                const increment = target / speed;
                
                if(count < target) {
                    stat.textContent = Math.ceil(count + increment);
                    setTimeout(animateStats, 1);
                } else {
                    stat.textContent = target;
                }
            });
        }
        
        // Start animation when stats are in view
        window.addEventListener('scroll', function() {
            const stats = document.querySelector('.stats-container');
            const position = stats.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(position < screenPosition) {
                animateStats();
                // Remove event listener after triggering once
                window.removeEventListener('scroll', this);
            }
        });