"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = __importDefault(require("./app"));
const socket_io_1 = require("socket.io");
const port = 5000;
let io;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const httpServer = (0, http_1.createServer)(app_1.default);
        // initializeWebSocket(httpServer);
        io = new socket_io_1.Server(httpServer, {
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
    });
}
main();
