// Awaits

const stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};

let is_shop_open = true ;

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let apple = "Apple";
            console.log("Which Topping would you Like?");
            resolve(apple);
        }, 1234)
    })
}

async function kitchen() {
    try {
        console.log("A")
        let topping = await toppings_choice();
        console.log(topping);
        console.log("D")

    } catch (err) {
        console.log("ABC doesnt exist: " + err)
    } finally {
        // console.log("Runs program Anyway");
    }
}

kitchen().then(() => {
    console.log("Running");
});

console.log("1")
console.log("2")

