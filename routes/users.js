const express = require('express')
const router = express.Router()

router.use(logger)

// router
//   .route('*/:id')
//   .get((req, res) => {
//     res.send(`user detail: ${req.params.id}`)

//   })
//   .put((req, res) => {
//     res.send(`user detail: ${req.params.id}`)
//   })
//   .delete((req, res) => {
//     res.send(`user detail: ${req.params.id}`)
//   })
  
const users = [{ name: 'sally' }, { name: 'john' }]



// router.param('id', (req, res, next, id) => {
//   req.user = users[id]
//   next()
// })

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}


// router.get('/', (req, res) => {
//   res.send('user list')
// })

router.get('/new', (req, res) => {
  console.log(req.query.name)
  res.render('users/new', {firstName: 'John', lastName: 'Doe'})
})

router.post('/', (req, res) => {
  console.log(req.body.firstName)
   res.send('create user')
})

// dyanmic routes

// router.get('/:id', (req, res) => {
//   req.params.id
//   res.send(`user detail: ${req.params.id}`)
// })

module.exports = router
