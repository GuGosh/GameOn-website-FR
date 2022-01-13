// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelector('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeModalBtn = document.querySelector('span.close');
const inputs = document.querySelectorAll('input');
// launch modal event
modalBtn.addEventListener('click', launchModal);
closeModalBtn.addEventListener('click', closeModalForm);

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

function closeModalForm() {
  modalbg.style.display = 'none';
  reinitForm();
}

function reinitForm() {
  form.reset();
  inputs.forEach((input) => {
    hideErrorMessage(input);
  });
  modal_content_form.style.display = 'block';
  modal_content_confirmation.style.display = 'none';
}