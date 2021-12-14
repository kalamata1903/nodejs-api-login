const express = require('express');
const app = express();

const id = "admin";
const pass = "123456";

app.get('/login',(req,res)=>{
    console.log("login");
    res.send("Merhaba Anasayfa");
})

app.get('/login/:id/:pass',(req,res)=>{
    console.log("login");
    if(req.params.id !== id)
    {
        res.status(404).send("hatalı şifre veya password");
    }
    if(req.params.pass !== pass)
    {
        res.status(404).send("hatalı şifre veya password");
    }
    res.send("Merhaba Anasayfa");
})

app.listen(3000);