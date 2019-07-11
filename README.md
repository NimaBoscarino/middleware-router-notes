# W3D4: More Express Stuff

[The code for this lecture lives on GitHub](https://github.com/NimaBoscarino/middleware-router-notes)

Hello! Thanks for sitting in on today's lecture. We covered a LOT of stuff today, but today's content is _not_ directly related to TinyApp. What we looked at was mostly _advanced_ Express concepts, which we'll cover in assignments later on in the bootcamp.

The demo project that we built is available in the `chedda` folder. You can run it by first installing the dependencies (`npm i`), and then running `node server.js`.

## Topics Covered

Broken down into bullet points, the topics we covered included:

- Debugging tips
- The HTTP lifecycle (a review)
- RESTful routing
- Middleware
- Express review (rendering with EJS templates)
- Cookies
- Making an express app more manageable with Routers

I'll write a bit about some of these topics, but take a look within the demo (and the lecture video) to see this stuff in action.

## Debugging Tips

Use `console.log`. There are debugger tools out there, but there's plenty of time to learn about tooling later on in your career. The most powerful tool is going to be good old `console.log`.

Code gets buggy and frustrating when it's opaque! We can use `console.log` to make our code more transparent, so we have a better idea of how the code is running.

Think of your code as a big block of cheese. Cheese might have mold in it! We won't know until we break it apart. With holey cheese like Emmental, however, we can see deeper into the cheese to see if there's mold in there easily.

`console.log` puts holes in your cheese 🧀

## The HTTP Lifecycle

At this point, you're pretty comfortable with the idea of HTTP being a request-response protocol. That's going to be central to your understanding of how to use Express. In general, when we make a server we have to declare what *endpoints* a client is allowed to make requests to. Endpoints are also called *routes*.

## RESTful Routing

Coming up with the particular that your application needs can be stressful! Luckily, there's a bit of a recipe that you can use to come up with most of the ones that you'll need. This recipe is called *Representational State Transfer*, or _REST_. REST is a pretty big topic, but all that we really need to know about it is that with two simple questions we can generate _most_ of the routes that our application should have.

1. What resources are we dealing with?
2. What are we doing to those resources?

We need to start with some user stories, which describe what our application _is_ and how a user can _interact_ with the application.

e.g. from our lecture

```
A website where users make accounts (new user)
users with accounts can log in
users who have logged in can create new posts
users who have logged in can comment on posts

On the home page I should see a login bar
On the home page I should see a list of posts
When I go to a post's page, I should see comments
  - See the comments for a post
  - See the details for a post (including the comments)
If I'm logged in, I should be able to comment
```

Once I have some user stories set up, I have a good mental idea of what my application is going to be like. Then, I can look at these stories and start picking out the "resources" or _nouns_ that appear in here. The main ones here are:

```
Resources:

- users
- posts
- comments
```

Then we tag the resources with the _actions_ that need to be done on those resources, through your user stories. Generally, we'll be able to identify these by looking for "action" words like: 

- see
- create
- update
- delete

```
Resources:

- users -> CREATE
- posts -> CREATE, GET MANY, GET ONE
- comments -> CREATED within a post
```

Each of these things can be mapped to the HTTP verbs!

```
ROUTES:

POST /users
POST /posts
GET /posts
GET /posts/:id (e.g. GET /posts/12, which gets a particular post)
POST /posts/:id/comments (get the comments for a particular post)
```

This takes some practice, but once you get into the practice of making RESTful routes you'll find that the routing part of your projects becomes a breeze!

## Middleware

Oof, middleware sounds scary! We'll tackle it!

Middleware is _anything_ that should happen between the request and response in an Express app. For example, maybe I want to increase a counter every time someone makes a request: that could be middleware!

Express handles every request that comes in by passing it down a _pipeline_ of middleware. We can plug in middleware for whatever we see fit.

Some of the middleware that we use in Express is for routing. For example:

```js
app.get('/hello', (req, res) => {
 // stuff!
})
```

Here's a bit of middleware that catches any GET request to `/hello`. You've seen this before!

We can make fancy general-purpose middleware:

```js
app.use((req, res, next) => {
  console.log('someone made a request')
  next()
})
```

This middleware console.logs a statement whenener ANY request comes through, and then it calls `next()` to pass execution off to the next piece of middleware in the pipeline. Our routing middleware does not use `next()` because it's the last piece of our pipeline.

We can use middleware that other people have made for us. In TinyApp and this demo we use all kinds of middleware:

- morgan
- bodyparser
- cookie-parser
- and more!

Thing of middleware as a "plugin".

## Cookies

Cookies let the server attach extra information to a client, for later reference. For example, we can attach a `username` to a client when they log in, so that the requests they make later are authenticated. You can use cookies for all kinds of stuff, it's really up to you! Any time that something should be _remembered_ about a client, the server has the option to set a cookie for that.

## Routers in Express

To keep our files from becoming 200+ lines long, we can split our app into smaller "routers" where we store the routes for everything that follows a common prefix. For example, every one of my `/articles/*` routes could be put into a common router, which can be attached to every `/articles/*` request.

Take a look at how I define those routes in the `routes/articles.js` file, specifically looking at the `express.Router()` command. From that file, I can export the routes (see the bottom of that file).

In another file, like my `server.js`, I can import those routes and register them to a particular _prefix_.

```
app.use('/articles', articleRoutes)
```

That's all for today!

There's plenty of time to get comfortable with this stuff, but I wanted it to be on your radar.

Enjoy, and let me know if you have any questions.

Cheers,

Nima Boscarino