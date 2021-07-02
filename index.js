require('dotenv').config()

// import
const Express = require('express')
const Bodyparser = require('body-parser')
const { httpServer } = require('./servers')

// express app
const App = Express()
App.use(Bodyparser.raw())

// server part
httpServer(App).listen("3000", console.log(`Server listening on 3000`))

