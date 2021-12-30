function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeModalBtn = document.querySelectorAll('span.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
closeModalBtn.forEach((btn) => btn.addEventListener('click', closeModalForm));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

function closeModalForm() {
  modalbg.style.display = 'none';
}