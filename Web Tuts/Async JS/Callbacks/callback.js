let h1 = document.querySelector('h1');
let output = document.querySelector('.output');
let flavour = document.querySelector('.flavour')

function displayOutput(text) {
    output.innerHTML += `<p>${text}</p>`;
    console.log(`${text}`);
}

h1.addEventListener('click', () => {
    let fruit_name = flavour.value;
    order(fruit_name, production);
})


// Callbacks

const stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};


let order = (fruit_name, call_production) => {
    displayOutput("Order Placed!! Starting production.");
    call_production(fruit_name);
}

let production = (fruit_name) => {
    setTimeout(() => {
        displayOutput("Production started!!");

        setTimeout(() => {
            displayOutput(`${stocks.Fruits[fruit_name]} selected!`)

            setTimeout(() => {
                displayOutput("Cut the fruit");

                setTimeout(() => {
                    displayOutput("Serve the Icecream!!")

                }, 0000)

            }, 5000)

        }, 0000);
        
    }, 0000);
}