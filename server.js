const express = require('express')
const showsRouter = require('./routers/showsRouter')
const charactersRouter = ('./routers/charactersRouter.js')
const helmet = require('helmet')
const morgan = require('morgan')
const server = express();

server.use(helmet());
server.use(morgan());
server.use(express.json());
// server.use('/api/characters', charactersRouter)
server.use('/api/shows', showsRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "This fucker works!"})
})

module.exports=server;