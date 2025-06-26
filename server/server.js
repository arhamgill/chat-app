const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*"
  },
});

io.on("connection", (socket) => {
  console.log("a user connected with id:", socket.id);
    socket.on("client-ready", (msg) => {
        console.log("Message from client:", msg);
    });
    socket.on("button-clicked", (msg) => {
        console.log("Button was clicked on the client side:", msg);
    })
})



server.listen(3001, () => {
  console.log(" Server listening on port 3001");
})
