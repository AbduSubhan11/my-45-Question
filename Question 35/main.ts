let animals:string[] = ["Dog","Hourse","Lion",];
for (let i=0; i<animals.length; i++){
    console.log(animals[i]);
}
for (let i=0; i<animals.length; i++){
let animal:string=animals[i];
    if(animal=="Dog"){
        console.log(`A ${animal} would make good pet`)
    }else if(animal=="Hourse"){
        console.log(`A ${animal} is good for riding`)
    }else {
        console.log(`A ${animal} is a bravest animal in the forest`)
    }       
};
console.log(`${animals} all these animals have four legs, two eyes and have a tail`);