let btn = document.querySelector('.btn');

// Array.from
// pseudo-classes Also Work in querySelector
// node.matches (True/False)

btn.addEventListener('click', () => {
    for(let node of document.body.children) {
        if(node.matches('a[href ^= "http"]')) {
            console.log(node.href);
        }
    }   
});