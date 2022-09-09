const promise = new Promise((resolve, reject) => {
    resolve("Data result");
});

promise.then(
    data => {
        console.log(data);
    }
)

const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("IT'S ERROR"));
    }, 2000);
});

errorPromise.then(
    data => {
        console.log(data);
    }
).catch(err => {
    console.log(err);
})