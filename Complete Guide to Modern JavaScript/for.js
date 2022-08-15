
var fruits = ['apple', 'banana'];
for(const fruit of fruits){
    console.log(fruit);
}

let list = [1,2,3,4];

for(let i in list){
    console.log(`in ${i}`);
}



for(let i of list){
    console.log(`of ${i}`);
}