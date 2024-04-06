const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, toppings) => {
    console.log(`Order received! Baking a ${size} pizza with ${toppings}.`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();


// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, toppings) => {
//     console.log(`Order received! Baking a ${size} pizza with ${toppings}.`);
// });

// emitter.on("order-pizza", (size) => {
//     if(size === "large"){
//         console.log(`Serving a complimentary drink.`);
//     }
   
// });

// emitter.emit("order-pizza", "large", "mushroom");

// emitter.emit("order-pizza", "large");


