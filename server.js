const express = require('express')
const app = express()
const mailMe = require('./mail.js')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  console.log('Hello World')
  res.render('index', { text: 'World' })
})

const userRoute = require('./routes/users')
app.use('/users', userRoute)

app.get('/item', (req, res) => {
  console.log(`param: ${req.query.email}`)
  mailMe(req.query.email)  
})

app.listen(3000)
