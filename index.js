document.addEventListener("DOMContentLoaded", function() {

const form = document.getElementById('contact_form');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('emailInput');
const teleInput = document.getElementById('teleInput');
const textarea = document.getElementById('textarea');

form.addEventListener('submit', function (e) {
    console.log("submitted");
       e.preventDefault();

    if (fullNameInput.value === '' || emailInput.value === '' || teleInput.value === '' || textarea.value === '') {
        alert('Please fill in all fields.');
    } else {
        // Here, you can include code to handle form submission, like sending an email or saving data.
        alert('Form submitted successfully!');
        // form.reset();
    }
});
});


