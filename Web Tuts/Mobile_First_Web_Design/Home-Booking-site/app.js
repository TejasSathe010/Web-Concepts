toggler = document.querySelector('.toggler');
nav_list = document.querySelector('.nav-list');

toggler.addEventListener('click', () => {
    console.log('Button clicked');
    nav_list.classList.toggle('show');
});