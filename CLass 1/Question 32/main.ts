let current_user = ["Sarim","Suffiyan","Ahtesham","Ayan","Naveed"];
let new_user = ["Eric","Suffiyan","Ahtesham","Bill Gates","Ahmed"];
let newArr = current_user.map(user=>user.toLowerCase()); 
new_user.forEach(newUser=>{
    let lower_new_user = newUser.toLowerCase();
        if(newArr.includes(lower_new_user)){
        console.log(`this username "${newUser}"is already taken. you will need to enter a new username`);
    }else{
        console.log(`the username "${newUser}" is available`);
    }
});