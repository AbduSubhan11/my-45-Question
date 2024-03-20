"use strict";
let userName = ["Admin", "Sarim", "Suffiyan", "Naveed", "Ahtesham"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === 'Admin') {
        console.log("Hello Admin,would you like to see the status report?");
    }
    else {
        console.log(`Hey ${userName[i]} welcome to the website`);
    }
}
