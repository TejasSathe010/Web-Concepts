let btn = document.querySelector('.btn');

// Array.from
// pseudo-classes Also Work

btn.addEventListener('click', () => {
    let li_last = document.querySelectorAll('ul li:last-child');
    for(let li of li_last) {
        console.log(li.textContent);
    }
});