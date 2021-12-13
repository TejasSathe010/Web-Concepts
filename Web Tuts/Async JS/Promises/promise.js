// Promises

const stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};

let is_shop_open = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("Shop is already closed!"));
        }
    });
}

let production = (work) => {
    return new Promise((resolve, reject) => {
        resolve(work());
    });
}


order(2000, () => {
    console.log(`${stocks.Fruits[0]} was selected`);
})
.then(() => {
    return production(() => {
        console.log("Production started");
    })
})
.then(() => {
    return order(3000, () => {
        console.log("Add water and Ice and Mix it");
    })
})
.then(() => {
    return order(1000, () => {
        console.log("Start the Machine");
    })
})
.then(() => {
    return order(2000, () => {
        console.log("Serve the Icecream");
    })
})
.catch(() => {
    console.log("Customer left");
})
.finally(() => {
    console.log("Shop Closed");
});