let invite = ["Sarim","Suffiyan","Naveed","AHtesham"];
invite.splice(3,1,"Ali"); //"Ahtesham" is can't making dinner so, we replacing him with "Ali"
invite.forEach((val)=>{
    console.log("Dear",val,"You are invited at dinner")
});