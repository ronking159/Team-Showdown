const PORT = 3000

const express = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(`${dirname}\\public\\index.html`)
})

server.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`)
})