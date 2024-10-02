const Event_Emitter=require('events')
const billinare=new Event_Emitter();

// observer 1: inspired by billionare
billinare.on("Make money",(requirement)=>{
    if (requirement==="hardwork"){
        console.log("How to be financial independent")}
});
// observer 2: not inspired /enemy
billinare.on("destroy you",(action)=>{
    if (action==="lazy"){
        console.log("will destory u")
    }
});

// Node js process
process.on("exit",(code)=>{
    console.log(`OUTPUT IS ${code}`)
});

//Now emit or call the emiter
billinare.emit("Make money","hardwork");
// for enemy
billinare.emit("destroy you","lazy")


// will not worK-----------DETERMINE WHY????-----------
billinare.emit("destroy ","lazy")