document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const formMessage = document.getElementById('formMessage');

    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the default form submission

        // Get form values
        const fullName = document.getElementById('fullName').value;
        const vehiclePlate = document.getElementById('vehiclePlate').value;
        const email = document.getElementById('email').value;
        const inspectionDate = document.getElementById('inspectionDate').value;
        const inspectionTime = document.getElementById('inspectionTime').value;
        const inspectionType = document.getElementById('inspectionType').value;

        // Simple validation checks
        if (!fullName || !vehiclePlate || !email || !inspectionDate || !inspectionTime || !inspectionType) {
            showMessage('Please fill out all required fields.', 'error');
            return;
        }
        
        // Simulate sending data to a server (in a real app, you'd use fetch() or another API call)
        console.log('Form Submitted!', {
            fullName,
            vehiclePlate,
            email,
            inspectionDate,
            inspectionTime,
            inspectionType
        });

        // Display a success message
        const message = `Thank you, ${fullName}! Your appointment for vehicle plate **${vehiclePlate}** has been requested for **${inspectionDate}** at **${inspectionTime}**. A confirmation email will be sent to **${email}**.`;
        showMessage(message, 'success');

        // Clear the form
        appointmentForm.reset();
    });

    /**
     * Helper function to show a message to the user.
     * @param {string} text The message to display.
     * @param {string} type The type of message ('success' or 'error').
     */
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = 'message'; // Reset class
        if (type === 'success') {
            formMessage.classList.add('success');
            formMessage.style.backgroundColor = '#d4edda';
            formMessage.style.color = '#155724';
            formMessage.style.border = '1px solid #c3e6cb';
        } else if (type === 'error') {
            formMessage.classList.add('error');
            formMessage.style.backgroundColor = '#f8d7da';
            formMessage.style.color = '#721c24';
            formMessage.style.border = '1px solid #f5c6cb';
        }
    }
});
