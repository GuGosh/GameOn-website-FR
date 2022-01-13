// DOM elements
const form = document.querySelector('form');
const input_text = document.querySelectorAll('input[type=text]');
const input_email = document.querySelector('input[type=email]');
const input_date = document.querySelector('input[type=date]');
const input_number = document.querySelector('input[type=number]');
const radio_button_location = document.querySelectorAll('input[name=location]');
const checkbox_cu = document.querySelector('#checkbox1');

form.addEventListener('submit', validate);
input_text.forEach((input) => input.addEventListener('blur', (event) => {
    validateText(event.target);
}));
input_email.addEventListener('blur', (event) => {
    validateEmail(event.target);
});
input_date.addEventListener('blur', (event) => {
    validateDate(event.target);
})
input_number.addEventListener('blur', (event) => {
    validateNumber(event.target);
});

// Submit form
function validate(event) {
    event.preventDefault();
    var errors = false;

    input_text.forEach((input) => {
        if (!validateText(input)) {
            errors = true;
        }
    })

    if (!validateEmail(input_email) | !validateDate(input_date) | !validateNumber(input_number)) {
        errors = true;
    }

    var array_radio_button_location = Array.from(radio_button_location);
    const condition = (element) => element.checked == true;
    if (!array_radio_button_location.some(condition)) {
        errors = true;
        showErrorMessage(radio_button_location[0], 'Vous devez sélectionner au moins une ville');
    } else {
        hideErrorMessage(radio_button_location[0]);
    }

    if (!checkbox_cu.checked) {
        errors = true;
        showErrorMessage(checkbox_cu, 'Vous devez vérifier que vous acceptez les termes et conditions.');
    }

    if (!errors) {
        console.log('Merci pour votre inscription !');
    }
}

function validateText(dom_element) {
    var input_value = dom_element.value.trim();
    if (input_value.length < 2) {
        showErrorMessage(dom_element, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        return false;
    } else {
        hideErrorMessage(dom_element);
        return true;
    }
}

function validateEmail(dom_element) {
    // Si juste
    if (dom_element.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        hideErrorMessage(dom_element);
        return true;
    } else {
        // Si error
        showErrorMessage(dom_element, 'Veuillez entrer une adresse email valide.');
        return false;
    }
}

function validateDate(dom_element) {
    if (dom_element.value.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/)) {
        hideErrorMessage(dom_element);
        return true;
    } else {
        showErrorMessage(dom_element, 'Vous devez entrer votre date de naissance.');
        return false;
    }
}

function validateNumber(dom_element) {
    if (dom_element.value != '' && Number.isInteger(Number(dom_element.value))) {
        hideErrorMessage(dom_element);
        return true;
    } else {
        showErrorMessage(dom_element, 'Veuillez entrer un chiffre entier valide.');
        return false;
    }
}

function showErrorMessage(input, message) {
    hideErrorMessage(input);
    input.parentElement.setAttribute('data-error', message);
    input.parentElement.setAttribute('data-error-visible', true);
}

function hideErrorMessage(input) {
    if (input.parentElement.hasAttribute('data-error')) {
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    }
}