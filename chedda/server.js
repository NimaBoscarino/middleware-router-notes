const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const articleRoutes = require('./routes/articles')

const users = {
  xXYeezyLoverXx: {
    username: 'xXYeezyLoverXx',
    password: 'hiphop'
  },
  DrakeStan: {
    username: 'DrakeStan',
    password: 'barelyhiphop'
  }
}

// app.use((req, res, next) => {
//   console.log(req.method + " " + req.path)

//   next()
// })

app.use(morgan('common'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.set('view engine', 'ejs');

app.use((req, res, next) => {

  if (req.method === 'GET' && req.path === '/kanye') {
    res.send('Kanye page')
  } else {
    next()
  }

})

// all of my login/etc. stuff

// all of my /articles stuff

// GET /articles, GET /articles/new
// POST /articles, GET /articles/12/comments
app.use('/articles', articleRoutes)

// all of my /comments ...

app.post('/login', (req, res) => {
  let username = req.body.username
  let password = req.body.password


  if (users[username] && users[username].password === password) {
    // set a cookie with my name
    res.cookie('username', username)
    res.redirect('/articles')
  } else {
    res.redirect('/articles')
  }
})

app.listen(1337, () => {
  console.log('Listening on 1337')
})