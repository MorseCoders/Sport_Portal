const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
var port = 3001;
console.log(port);
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // console.log(`User Connected: ${socket.id}`);

   socket.on("connect_msg" ,  (data)=>{
    console.log(data);
   })
   socket.on("user" ,  (data)=>{
    console.log(data);

     socket.emit("user_exist" , {user : "false"});
   })
   socket.on("new_user_detail" ,  (data)=>{
    console.log(data);
     //socket.emit("user_exist" , {user : "true"});
   })
   
  // socket.on("snd_msg" , (data)=>{
  //   console.log(data);
  // });
//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });
  
//   socket.on("send_message", (data) => {
//     console.log(data);
//     socket.to(data.room).emit("receive_message", data);
//   });
  
//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
});

app.get("/" , (req , res)=>{
  res.send("hiii welcome ");
})
server.listen(port, () => {
  
  console.log(`Server ${port}`);
});


