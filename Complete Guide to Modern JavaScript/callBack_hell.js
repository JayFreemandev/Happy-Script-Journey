const orderHouse = (wood, callback) => {
    gatherWood(wood, function(gatherWood)){
        gaterWorker(gaterWood, function(gaterWorker)){
            console.log("we are ready to build a house");
        }
    }
}