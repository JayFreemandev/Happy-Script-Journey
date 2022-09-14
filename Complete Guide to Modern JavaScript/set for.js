const pizza = new Set();

pizza.add("potato");
pizza.add("cheese");
pizza.add("tomato");
pizza.add("tomato");

const iterator = pizza.values();
for(const special of pizza){
    console.log(special); 
}
