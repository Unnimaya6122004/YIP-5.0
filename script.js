// script.js

const form = document.getElementById('infoForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Perform any necessary validation here
    if (validateForm()) {
        alert('Form submitted successfully!'); // Placeholder for actual submission logic
        scrollToTop(); // Scroll to the top of the page
        form.reset(); // Reset form fields
    }
});

// Function to validate form fields
function validateForm() {
    const userID = document.getElementById('userID').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const emergencyName = document.getElementById('emergencyName').value.trim();
    const emergencyRelationship = document.getElementById('emergencyRelationship').value.trim();
    const emergencyPhone = document.getElementById('emergencyPhone').value.trim();
    const medicalID = document.getElementById('medicalID').value.trim();
    const medications = document.getElementById('medications').value.trim();
    const healthConditions = document.getElementById('healthConditions').value.trim();

    if (userID === '' || firstName === '' || lastName === '' || age === '' ||
        phone === '' || emergencyName === '' || emergencyRelationship === '' ||
        emergencyPhone === '' || medicalID === '' || medications === '' ||
        healthConditions === '') {
        alert('Please fill in all required fields.');
        return false; // Form is not valid
    }
    return true; // Form is valid
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
