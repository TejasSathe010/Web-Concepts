let add_btn = document.querySelector('.add-btn');
let del_btn = document.querySelector('.del-btn');
let ul = document.querySelector('.book')

// Array.from
// pseudo-classes Also Work in querySelector
// node.matches (True/False)
// ele.closest Look for closest parent with given selector

add_btn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = li.nodeType;
    li.classList.add('click')
    ul.appendChild(li);
});

del_btn.addEventListener('click', () =>{
    ul.removeChild(ul.firstChild);
})

