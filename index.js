const express = require("express");
const app = express();

app.get('/hello',(req,res)=>{
    return res.send({
        "message" : "Hello World"
    });
})

const PORT  = 3000;
app.listen(PORT,(req,res)=>{
    console.log("App is running on PORT:",PORT)
})