const food = new Map();

food.set("pizza", 19000);
food.set("chicken", 20000);
food.set("sozu", 9999);

console.log(food);

food.forEach((val,key) => console.log(key, val));

for(const yammy of food){
    console.log(yammy);
}