const http = require('http')
const { send } = require('process')
const server = http.createServer()

const socket = require('socket.io')

const io = socket(server, {
    cors: {
        origin: 'http://localhost:8000',
        methods: ["GET", "POST"]
    }
})

const room = "chat_room";

io.on('connection', socket => {
    console.log("connected - " + socket.id)
    
    socket.join(room)
    socket.broadcast.emit("welcome", "the receiver is ready")

    socket.on('message', msg => {
        io.to(room).emit('message_client', msg)
    })
})

server.listen(4000, () => console.log('App running on Port 4000'))