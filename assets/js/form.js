// DOM elements
const form = document.querySelector('form');
const input_text = document.querySelectorAll('input[type=text]');
const inputEmail = document.querySelector('input[type=email]');
const inputDate = document.querySelector('input[type=date]');
const inputNumber = document.querySelector('input[type=number]');
const radio_button_location = document.querySelectorAll('input[name=location]');
const checkbox_cu = document.querySelector('#checkbox1');
const modal_content_form = document.querySelector('.modal-body.form');
const modal_content_confirmation = document.querySelector('.modal-body.confirmation-message');

// launch form event
form.addEventListener('submit', validate);
input_text.forEach((input) => input.addEventListener('blur', (event) => {
    validateText(event.target);
}));
inputEmail.addEventListener('blur', (event) => {
    validateEmail(event.target);
});
inputDate.addEventListener('blur', (event) => {
    validateDate(event.target);
})
inputNumber.addEventListener('blur', (event) => {
    validateNumber(event.target);
});

/**
 * Validate form
 * @param {*} event 
 * @returns {boolean}
 */
function validate(event) {
    event.preventDefault();

    const array_input_text = Array.from(input_text);
    let errors = array_input_text.every((element) => !validateText(element));

    if (!validateEmail(inputEmail) | !validateDate(inputDate) | !validateNumber(inputNumber)) {
        errors = true;
    }

    const array_radio_button_location = Array.from(radio_button_location);
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
        showConfirmationMessage();
    }
}

/**
 * Validate text format
 * @param {*} dom_element 
 * @returns {boolean}
 */
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

/**
 * Validate email format
 * @param {*} dom_element 
 * @returns {boolean}
 */
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

/**
 * Validate date format
 * @param {*} dom_element 
 * @returns {boolean}
 */
function validateDate(dom_element) {
    if (dom_element.value.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/)) {
        hideErrorMessage(dom_element);
        return true;
    } else {
        showErrorMessage(dom_element, 'Vous devez entrer votre date de naissance.');
        return false;
    }
}

/**
 * Validate number format
 * @param {*} dom_element 
 * @returns {boolean}
 */
function validateNumber(dom_element) {
    if (dom_element.value != '' && Number.isInteger(Number(dom_element.value))) {
        hideErrorMessage(dom_element);
        return true;
    } else {
        showErrorMessage(dom_element, 'Veuillez entrer un chiffre entier valide.');
        return false;
    }
}

/**
 * Show Error Message
 * @param {*} input 
 * @param {string} message
 * @returns {void}
 */
function showErrorMessage(input, message) {
    hideErrorMessage(input);
    input.parentElement.setAttribute('data-error', message);
    input.parentElement.setAttribute('data-error-visible', true);
}

/**
 * 
 * @param {*} input 
 * @returns {void}
 */
function hideErrorMessage(input) {
    if (input.parentElement.hasAttribute('data-error')) {
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    }
}

/**
 * Show Confirmation message
 * @returns {void}
 */
function showConfirmationMessage() {
    modal_content_form.style.display = 'none';
    modal_content_confirmation.style.display = 'flex';
}
