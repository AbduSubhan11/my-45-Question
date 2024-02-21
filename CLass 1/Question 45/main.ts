let creatCar=(manuFacture, modelName)=>{
    let car={
        manufacture:manuFacture,
        modelname :modelName,
    };
    return car;
};
let myCar = creatCar("Toyota","Civic")
console.log(myCar);