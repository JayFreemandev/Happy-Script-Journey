let pizza = {name: "potato", price: "18000"};
let chicken = {name :"dangdang", price: "6900"};

const food = new WeakSet([pizza, chicken]);

for(const yammy of food){
    console.log(yammy);
}