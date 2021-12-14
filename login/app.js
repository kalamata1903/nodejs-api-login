const express = require('express');
const body = require('body-parser');
const app = express();

const id = "admin";
const pass = "123456";

app.use(body.json());
app.use(body.urlencoded({
    extended:true
}))

app.get('/login',(req,res)=>{
    res.send("Merhaba Anasayfa");
})

app.post('/login',(req,res)=>{

    if(req.body.id !== id)
    {
        res.status(404).send("hatalı şifre veya password");
    }
    if(req.body.pass !== pass)
    {
        res.status(404).send("hatalı şifre veya password");
    }
    res.send("dönüyorr");
    
})

app.listen(3000);