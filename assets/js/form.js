// DOM elements
const form = document.querySelector('form');
const input_text = document.querySelectorAll('input[type=text]');

form.addEventListener('submit', validate);
input_text.forEach((input) => input.addEventListener('blur', validateText));

// Submit form
function validate(event) {
    event.preventDefault();
    console.log('Merci pour votre inscription !');
}

function validateText(event) {
    console.log('test');
    var input_value = event.target.value.trim();
    if (input_value < 2) {
        showErrorMessage(event.target, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    } else {
        hideErrorMessage(event.target);
    }
}

function validateEmail(event) {
    // Si juste
    hideErrorMessage(event.target);
    // Si error
    showErrorMessage(event.target, 'erreur');
}

function showErrorMessage(input, message) {
    hideErrorMessage(input);
    // ajout du span
    var span = document.createElement('span');
    span.append(message);
    input.parentElement.append(span);
    // ajout class
    input.parentElement.classList.add('error');
}

function hideErrorMessage(input) {
    var span = input.parentElement.querySelector('span');
    if (span) {
        span.remove();
    }
}