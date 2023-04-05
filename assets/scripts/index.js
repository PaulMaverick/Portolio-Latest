const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.link-dropdown-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    dropdown.classList.toggle('active');
})