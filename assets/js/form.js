// DOM elements
const form = document.querySelector('form');
const input_text = document.querySelectorAll('input[type=text]');
const input_email = document.querySelector('input[type=email]');
const input_number = document.querySelector('input[type=number]');
const checkbox_cu = document.querySelector('#checkbox1');

form.addEventListener('submit', validate);
input_text.forEach((input) => input.addEventListener('blur', validateText));
input_email.addEventListener('blur', validateEmail);
input_number.addEventListener('blur', validateNumber);

// Submit form
function validate(event) {
    event.preventDefault();
    var errors = false;

    if (!checkbox_cu.checked) {
        showErrorMessage(checkbox_cu, 'Vous devez vérifier que vous acceptez les termes et conditions.');
    }

    console.log('Merci pour votre inscription !');
}

function validateText(event) {
    console.log('test');
    var input_value = event.target.value.trim();
    if (input_value.length < 2) {
        showErrorMessage(event.target, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    } else {
        hideErrorMessage(event.target);
    }
}

function validateEmail(event) {
    // Si juste
    if (event.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        hideErrorMessage(event.target);
    } else {
        // Si error
        showErrorMessage(event.target, 'Veuillez entrer une adresse email valide.');
    }
}

function validateNumber(event) {
    if (event.target.value != '' && Number.isInteger(event.target.value)) {
        hideErrorMessage(event.target);
    } else {
        showErrorMessage(event.target, 'Veuillez entrer un chiffre entier valide.');
    }
}

function showErrorMessage(input, message) {
    hideErrorMessage(input);
    // error
    input.parentElement.setAttribute('data-error', message);
    input.parentElement.setAttribute('data-error-visible', true);
}

function hideErrorMessage(input) {
    if (input.parentElement.hasAttribute('data-error')) {
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    }
}