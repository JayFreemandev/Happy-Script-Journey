var proxy = new Proxy(target, handler);

const cat = {breed: "street", age:"?"};

const catProxy = new Proxy(cat, {
    get(target, breed){
        return target[breed].toUpperCase();
    },
    set(target, breed, value) {
        console.log("chaning breed to ");
        target[breed] = value;
    },
});

console.log(catProxy.breed);