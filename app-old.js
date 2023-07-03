const express = require('express')
require('dotenv').config();

const app = express()

app.get('/',  (req, res)=> {
    res.send('Hello World')
})

app.listen(process.env.PORT, ()=>{
    console.log('Se esta escuchando por el puerto',process.env.PORT)
})