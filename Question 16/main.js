"use strict";
let guest = ["Sarim", "Suffiyan", "Naveed", "Ali"];
guest.unshift("Ahad");
guest.splice(2, 0, "Ayan");
guest.push("Jawad");
console.log("Hurrah! We have found a bigger dinner at our home we'll waiting for you all");
guest.forEach((val) => {
    console.log("Dear", val, "You are invited at dinner");
});
