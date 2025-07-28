// Tab Switching
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                // Update active tab
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show corresponding content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if(content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
        
        // Remote Monitoring Functions
        function updateReading(elementId) {
            const element = document.getElementById(elementId);
            const currentValue = element.textContent;
            
            // Simulate new reading
            if(elementId === 'blood-pressure') {
                const systolic = Math.floor(Math.random() * 40) + 100;
                const diastolic = Math.floor(Math.random() * 20) + 60;
                element.textContent = `${systolic}/${diastolic}`;
                
                // Check for dangerous levels
                if(systolic > 140 || diastolic > 90) {
                    showAlert(`High blood pressure detected (${systolic}/${diastolic}). Please rest and contact your doctor.`);
                }
            } else if(elementId === 'heart-rate') {
                const newRate = Math.floor(Math.random() * 40) + 60;
                element.textContent = newRate;
                
                if(newRate > 100 || newRate < 50) {
                    showAlert(`Abnormal heart rate detected (${newRate} bpm). Please remain calm and contact your doctor.`);
                }
            }
        }
        
        function showAlert(message) {
            const panel = document.getElementById('alert-panel');
            const messageEl = document.getElementById('alert-message');
            
            messageEl.textContent = message;
            panel.style.display = 'block';
            panel.scrollIntoView({ behavior: 'smooth' });
        }
        
        function dismissAlert() {
            document.getElementById('alert-panel').style.display = 'none';
        }
        
        function callEmergency() {
            window.location.href = "tel:+250791832523";
        }
        
        // Virtual Consultation Functions
        function startConsultation() {
            const videoFeed = document.getElementById('video-feed');
            const endCallBtn = document.getElementById('end-call-btn');
            const notesSection = document.getElementById('consultation-notes');
            
            // Simulate starting a call
            videoFeed.innerHTML = '<p style="color: white; padding-top: 50px;">Connected to Dr. Muteteri Maria...</p>';
            endCallBtn.style.display = 'inline-block';
            notesSection.style.display = 'block';
        }
        
        function endConsultation() {
            const videoFeed = document.getElementById('video-feed');
            const endCallBtn = document.getElementById('end-call-btn');
            
            videoFeed.innerHTML = '<p style="color: white; padding-top: 50px;">Doctor video feed will appear here when consultation starts</p>';
            endCallBtn.style.display = 'none';
        }
        
        function saveNotes() {
            alert('Consultation notes saved to your health record');
        }
        
        // Medication Reminder Functions
        function addReminder() {
            const name = document.getElementById('med-name').value;
            const dosage = document.getElementById('med-dosage').value;
            const time = document.getElementById('med-time').value;
            
            if(name && dosage && time) {
                const medList = document.getElementById('medication-list');
                const medItem = document.createElement('div');
                medItem.className = 'vital-card';
                medItem.innerHTML = `
                    <h3>${name}</h3>
                    <p>Dosage: ${dosage}</p>
                    <p>Time: ${formatTime(time)}</p>
                    <button class="button" onclick="takeMedicine(this)">Taken</button>
                `;
                medList.appendChild(medItem);
                
                // Clear form
                document.getElementById('med-name').value = '';
                document.getElementById('med-dosage').value = '';
                
                // Set actual browser notification
                scheduleNotification(name, dosage, time);
            } else {
                alert('Please fill all fields');
            }
        }
        
        function formatTime(timeString) {
            const [hours, minutes] = timeString.split(':');
            const hour = parseInt(hours);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const displayHour = hour % 12 || 12;
            return `${displayHour}:${minutes} ${ampm}`;
        }
        
        function takeMedicine(button) {
            button.parentElement.style.opacity = '0.5';
            button.textContent = '✓ Taken';
            button.disabled = true;
        }
        
        function scheduleNotification(name, dosage, time) {
            // This would use the Notification API in a real implementation
            console.log(`Scheduled reminder for ${name} (${dosage}) at ${time}`);
            
            // For demo purposes, we'll show an immediate alert
            setTimeout(() => {
                if(Notification.permission === 'granted') {
                    new Notification(`Time to take ${name}`, {
                        body: `Dosage: ${dosage}`,
                        icon: 'images/logo.png'
                    });
                } else {
                    alert(`REMINDER: Time to take ${name} (${dosage})`);
                }
            }, 5000); // 5 seconds for demo, would be actual time in real app
        }
        
        // Request notification permissions
        if(window.Notification) {
            Notification.requestPermission();
        }
        
        // Initialize with some sample medications
        window.onload = function() {
            const sampleMeds = [
                { name: 'Amoxicillin', dosage: '500mg', time: '08:00' },
                { name: 'Metformin', dosage: '1000mg', time: '13:00' },
                { name: 'Lisinopril', dosage: '10mg', time: '20:00' }
            ];
            
            sampleMeds.forEach(med => {
                document.getElementById('med-name').value = med.name;
                document.getElementById('med-dosage').value = med.dosage;
                document.getElementById('med-time').value = med.time;
                addReminder();
            });
        };