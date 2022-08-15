let pizza = {
    name: "potato",
    price: "4800",
};

let name = pizza.name;
let price = pizza.price;

//ES6
const pizza2 = {
    name2: "potato",
    price2: "4800",
};

const {name2, price2} = pizza2;

console.log(pizza2);

const coolGuy = {
    name: "rok",
    address: "한남동",
};


const {address: addr = "반포자이"} = coolGuy.address;
// console.log(addr);
// console.log(address);

const pizzaMenu = ["potato", "apple", "banana"];
const [a, b, ... food] = pizzaMenu;
console.log(food)

let busy = "yes";
let angry = "no";

[busy, angry] = [angry, busy];
console.log(busy, angry);

