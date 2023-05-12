// import the require modules
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const bookingRouter = require("./src/Routers/bookingRouter")
const cors = require("cors")

//system environment configuration
dotenv.config()

//mongoose connection import
const main = require("./src/connections/mongoose-connect")
main()

//midleware usage
app.use("/app/v1", bookingRouter)

// Set the allowed origins
const corsOptions = {
    origin: 'http://localhost127.0.0.1:5500'
  };
app.use(cors())

//server listening
const port = process.env.PORT || 5500;
app.listen(port, (err)=>{
    if(err) console.log(err)
    else console.log("Server is up at", port)
})