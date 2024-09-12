const express = require("express");
const path = require("path");
const socketIo = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 3000;  

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


io.on('connection', (socket) => {  
    console.log('New web socket connection....');


    socket.emit('message','Welcome to ChatCord')

    // Broadcasts when a user connects

    socket.broadcast.emit('message','A user has joined the chart');


    socket.on('disconnect',()=>{

        io.emit('message','A user has left the chart')

    })

    

});

app.use(express.static(path.join(__dirname, "public")));

server.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
});
