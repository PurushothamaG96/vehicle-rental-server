const mongoose = require("mongoose")
//seeding connection;
const seed  = require("../Seeding/seed")
function main(){
    try{
        mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true } )
        console.log("Database connected")
        seed()  
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports = main;