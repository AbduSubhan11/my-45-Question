"use strict";
let make_Sandwich = (...items) => {
    console.log("we makes your choice");
    items.forEach((items) => {
        console.log(items);
    });
    console.log("Enjoy your sandwich\n");
};
make_Sandwich("Tomato", "Meyonise", "Ketchup");
make_Sandwich("Cucumber", "onion", "meyonise");
make_Sandwich("Jam", "jelly");
