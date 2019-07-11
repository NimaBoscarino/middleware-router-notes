const express = require('express')
const articleRoutes = express.Router()

const articles = {
  a: {
    title: 'Wow I love Keanu Reeves',
    content: "He's breathtaking"
  },
  b: {
    title: 'I have no idea',
    content: 'Cheeeese'
  },
  c: {
    title: 'Yet another thing',
    content: 'Woo woo woo'
  }

}

articleRoutes.get('/', (req, res) => {
  // this thing constructs a reponse, that has the posts in it
  // res.json(articles)

  const username = req.cookies.username
 
  let templateVars = {
    articles: articles,
    username: ""
  }

  if (username) {
    templateVars.username = username
  }
 
  res.render("index", templateVars)

})

articleRoutes.post('/', (req, res) => {
  // console.log(JSON.stringify(req))
  console.log(req.body)

  const title = req.body.title
  const content = req.body.content

  let key = possible[index]

  articles[key] = {
    title: title,
    content: content
  }

  index++

  res.redirect('/articles')
})


let index = 3

const possible = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']



module.exports = articleRoutes