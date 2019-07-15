import express from 'express'
import bp from 'body-parser'
import "./db/dbconfig"

let port = 3000

let server = express()
server.use(bp.json())

import blogController from './controllers/blogController.js'

server.use('/api/blogs', new blogController().router)

server.get('/', express.static(__dirname + '/../public'))

server.use((error,req, res, next)=> {
    res.status(eror.status || 400).send(error)
})

server.listen(port, () => {
    console.log("Server running on port: ", port)
})