const form = document.getElementById('infoForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Perform any necessary validation here
    if (validateForm()) {
        alert('Form submitted successfully!'); // Placeholder for actual submission logic
        form.submit(); // Submit the form after validation
    }
});

// Function to validate form fields
function validateForm() {
    const inputs = form.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        if (input.required && input.value.trim() === '') {
            alert(`Please fill in the required field: ${input.name}`);
            isValid = false;
        }
    });

    return isValid;
}
