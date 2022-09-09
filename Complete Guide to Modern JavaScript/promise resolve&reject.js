// const promise = new Promise((resolve, reject) => {
//     resolve();
// });

// promise
//     .then(data => {
//         return 'working working';
//     })
//     .then(data => {
//         console.log(data);
//         throw 'failed;';
//     })
//     .catch(err => {
//         console.error(err);
//     });



const promise2 = new Promise((resolve, reject) => {
    resolve();
});

promise2
    .then(data => {
        throw new Error("sorry");
        console.log('first');
    })
    .catch(() => {
        console.log("we catched error");
    })
    .then(data => {
        console.log("I am second");
    });
    
    
        