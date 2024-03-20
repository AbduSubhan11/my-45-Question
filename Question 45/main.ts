let creatCar=(manuFacture:any, modelName:any)=>{
    let car={
        manufacture:manuFacture,
        modelname :modelName,
    };
    return car;
};
let myCar = creatCar("Toyota","Civic")
console.log(myCar);