// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeModalBtn = document.querySelectorAll('.closeModal');
const inputs = document.querySelectorAll('input');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModalForm));

/**
 * Open modal
 * @returns {void}
 */
function launchModal() {
  modalbg.style.display = 'block';
}

/**
 * Close Modal form
 * @returns {void}
 */
function closeModalForm() {
  modalbg.style.display = 'none';
  reinitForm();
}

/**
 * Reset form
 * @returns {void}
 */
function reinitForm() {
  form.reset();
  inputs.forEach((input) => {
    hideErrorMessage(input);
  });
  modal_content_form.style.display = 'block';
  modal_content_confirmation.style.display = 'none';
}