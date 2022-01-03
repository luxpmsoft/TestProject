const express = require("express");
const app = express();

app.get('/hello',(req,res)=>{
    return res.status(200).send({
        "message" : "Hello World - Test"
    });
})

const PORT  = 3000;
app.listen(PORT,()=>{
    console.log("App is running on PORT:",PORT)
})