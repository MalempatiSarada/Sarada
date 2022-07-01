const express = require('express')
const path = require('path')
const app =express()
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'mustache')
app.engine('mustache',require('hogan-middleware').__express)    
app.use(express.static(path.join(__dirname,'../images')))
app.get('/',(req,res,next) => {
    res.send("Welcome!!")
})

app.get('/json',(req,res,next) => {
    const data={
        Greetings : 'Welcome again!!'
    }
    res.json(data)
})
app.get('/home',(req,res,next) => {
    res.render('home',null)
})
app.get('/home1',(req,res,next) => {
    res.render('home1',null)
})

app.listen(5000)