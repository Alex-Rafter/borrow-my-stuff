const express = require('express')
const router = express.Router()

// router.route('*/:id').get((req, res) => {
//     res.send(`user detail: ${req.params.id}`)
// })

router.get('/', (req, res) => {
  res.send('user list')
})

router.get('/new', (req, res) => {
    res.send('new user form')
  })

// router.post('/', (req, res) => {
//    res.send('create user')     
// })

// dyanmic routes

router.get('/:id', (req, res) => {
    req.params.id
    res.send(`user detail: ${req.params.id}`)
})


module.exports = router