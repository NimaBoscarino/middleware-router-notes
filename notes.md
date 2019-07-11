## W3D4: REAL WORLD HTTP SERVERS

200ish.... express server file...

- split your code into files
  - specifically for express...
- how to decide what your routes should be
  - do I need GET /askdhgagkjshgd ??? what about POST /ahsdlkajshd/asdasd
  - REST
- some review on this week's stuff
  - authentication (cookies)
  - middleware


- console.log is fine
- CSS, I'll make time for that.
- The debugger, inspector...





HTTP:

  - hypertext transfer protocol
  - request - response protocol 
    - ONE IS A CLIENT
    - ONE IS A SERVER
  - REQUEST:
    - METHOD: GET, PUT, POST, DELETE
    - PATH: /dogs, /cats, /burger, RESOURCE
  
  Hey, server!

  If someone asks to GET a burger, give them a burger
  If someone POST you a burger, just take the burger

  Client: GET /potato-salad

  - RESPONSE

  
    - we'll get to this
  
  
  - on top of a TCP connection



## DEMO TODAY

Resources:
- users -> CREATE
- posts -> CREATE, GET MANY, GET ONE
- comments -> CREATED within a post

Verbs: CRUD (DESTROY)

- see
- create
- update
- delete

ROUTES:

POST /users
POST /posts
GET /posts
GET /posts/:id (e.g. GET /posts/12)
POST /posts/:id/comments

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

REST

- REPRESENTATIONAL STATE TRANSFER