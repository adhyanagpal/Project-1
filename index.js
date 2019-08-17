const express = require('express')
const app =express()

app.set('view engine' , 'hbs' )
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

app.get('/' , (req,res) => {
res.render('cover')}
)

app.get('/cover' , (req,res) => {
    res.render('cover')}
    )

app.get('/ourstory' , (req,res) => {
    res.render('ourstory')
})

app.get('/menu' , (req,res) => {
    res.render('menu')
})

app.listen( 4000, () => {
    console.log("Server Connected")
})