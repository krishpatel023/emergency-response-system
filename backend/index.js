import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
// import dotenv from "dotenv";
import users from './routes/users.js';

const app = express()
const PORT = 8000


//FOR .ENV
// dotenv.config();
//Used as we can't send direct json data to the server. so we need this middleware.
app.use(express.json())
//CORS
app.use(cors())
// res.header( "Access-Control-Allow-Origin", '*' );

//MongoDB CONNECTION
const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@db-1.49bybpl.mongodb.net/?retryWrites=true&w=majority');
        console.log("CONNECTED --- MongoDB");
    } catch (error) {
        handleError(error);
    }
}
mongoose.connection.on("disconnected", () => {
  console.log("DISCONNECTED --- MongoDB");
  connect();
});

//
app.use("/api/users", users)

//BACKEND START
app.listen(PORT, ()=>{
    connect();
    console.log("CONNECTED --- BACKEND");
})
app.get('/', (req,res)=>{
    res.send("CONNECTED TO BACKEND")
})