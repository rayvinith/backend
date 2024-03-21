const express = require('express')
const app=express()
require('dotenv').config
//express ka sara function ab express me aagya hai 

//backend me mostly ab callback function hi chalega 

app.get('/',(req,res)=>{
res.send("hello world")
})


app.get('/aniket',(req,res)=>{
res.send("hello world")
})

//ab tum server pr kuch bhej to diye but server ko batana bhi to hoga ki bhai tum listen to krlo

//production ke same jaruri thori hain ki yhi  port khali ho user ke bhi system me so ;
//install dotenv 
const PORT=1000
app.listen(process.env.PORT,()=>{
    console.log(`listening on ${PORT}`);
})