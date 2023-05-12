// import the require modules
const express = require("express")
const app = express()
const dotenv = require("dotenv")

//system environment configuration
dotenv.config()

//mongoose connection import
const main = require("./src/connections/mongoose-connect")
main()


//server listening
const port = process.env.PORT || 5500;
app.listen(port, (err)=>{
    if(err) console.log(err)
    else console.log("Server is up at", port)
})