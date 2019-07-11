const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.use('/:user', (req, res, next) => {
  console.log('middleware!')
  if (req.params.user === 'kanye') {
    res.send('error!')
  } else {
    next()
  }
})

app.get('/:user', (req, res) => {
  console.log('request!')
  res.render("index")
})

app.listen(1337, () => {
  console.log('hello world, listening on 1337')
})