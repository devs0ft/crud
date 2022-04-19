const express =require('express')
const {dbConnect} = require('./config/dbConnect')
const postRouter = require("./routes/post.router")
const app=express()

app.use(express.json())

app.use("/", postRouter);


const start = async()=>{
    await dbConnect();

    
app.listen(4000,()=>{
    console.log("🚀 server up and running");

})

};

start();
