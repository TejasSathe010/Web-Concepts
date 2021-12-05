let btn = document.querySelector('.btn');

// Array.from
// pseudo-classes Also Work in querySelector
// node.matches (True/False)
// ele.closest Look for closest parent with given selector

btn.addEventListener('click', () => {
    console.log(btn.attributes);
});