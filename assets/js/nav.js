// Dom elements
const burger_icon = document.querySelector('nav .icon');

// launch nav event
burger_icon.addEventListener('click', editNav);

/**
 * Switch nav on responsive
 * @returns {void}
 */
function editNav() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}