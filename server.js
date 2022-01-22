const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Hello World')
    // res.status(500).json({"msg" : "error"})
    // res.json({ "msg": "Hello World" })
    // res.download('server.js')
    res.render('index', {text : 'World'})
})

app.listen(3000)
