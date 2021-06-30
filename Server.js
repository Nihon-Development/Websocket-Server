const WebSocket = require('ws');
const Port = 5000;
const WebSocketServer = new WebSocket.Server({
    port: Port
});

WebSocketServer.on('connection', function (socket) {
    console.log("Client Connected");

    socket.on('message', function (Message) {
        console.log("Client Message Recieved: "  + Message);

        WebSocketServer.clients.forEach(function (client) {
            client.send(Message);
        });

    });

});

console.log( (new Date()) + " Server Is On Port: " + Port);
