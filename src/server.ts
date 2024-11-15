import {createServer} from "http";
import app from "./app";
import {Server} from "socket.io";

const port = 5000;
let io: Server;
async function main() {
  const httpServer = createServer(app);

  // initializeWebSocket(httpServer);
  io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  // io.use(verifySocketToken); // Middleware for token verification

  io.on("connection", socket => {
    console.log("New client connected", socket.id);

    // Handle booking events
    // handleBooking(socket);
    socket.on("message", data => {
      console.log(`Message from client: ${data}`);
    });
    // socket.on("disconnect", () => {
    //   console.log("Client disconnected", socket.id);
    // });
  });
  // const server: Server = app.listen(port, () => {
  //   console.log("Server running on port: ", port);
  //   console.log("Access the server at:", `http://${"localhost"}:${port}`);
  // });
  httpServer.listen(port, () => {
    console.log(`Server running on port: ${port}`);
    console.log("Access the server at:", `http://${"localhost"}:${port}`);
  });
}
main();
