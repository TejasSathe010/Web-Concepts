let add_btn = document.querySelector('.add-btn');
let del_btn = document.querySelector('.del-btn');
let ul = document.querySelector('.book');
let input = document.querySelector('#name');

// Array.from
// pseudo-classes Also Work in querySelector
// node.matches (True/False)
// ele.closest Look for closest parent with given selector

add_btn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = input.value;
    li.classList.add('click')
    add_btn.setAttribute('name', input.value);

    console.log(add_btn.getAttribute('name'));
    add_btn.textContent = input.value

    add_btn.setAttribute('disabled', 'disabled');

    console.log(li.getAttribute('class'));
    ul.appendChild(li);
});

del_btn.addEventListener('click', () =>{
    ul.removeChild(ul.firstChild);
    for(let attr of del_btn.attributes) {
        console.log(`${attr.name} = ${attr.value}` )  
    }
});

