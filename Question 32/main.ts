let current_user:string[] = ["Sarim","Suffiyan","Ahtesham","Ayan","Naveed"];
let new_user:string[] = ["Eric","Suffiyan","Ahtesham","Bill Gates","Ahmed"];
let newArr:string[] = current_user.map(user=>user.toLowerCase()); 
new_user.forEach(newUser=>{
    let lower_new_user:string = newUser.toLowerCase();
        if(newArr.includes(lower_new_user)){
        console.log(`this username "${newUser}"is already taken. you will need to enter a new username`);
    }else{
        console.log(`the username "${newUser}" is available`);
    }
});