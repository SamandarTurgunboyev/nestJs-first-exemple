import { SubscribeMessage, WebSocketGateway, WebSocketServer, } from "@nestjs/websockets";
import { Server, Socket } from "socket.io"

@WebSocketGateway({ cors: { origin: "*" } })
export class ChatGateway {
    @WebSocketServer()
    server: Server;

    handleConnect(client: Socket) {
        console.log(`Client connetc ${client.id}`);
        return `Client connetc ${client.id}`
    }

    handeleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: string) {
        console.log(`Message from ${client.id}: ${payload} on`);
        this.server.emit("message", `Message from ${client.id}: ${payload} emit`)
        return `Message from ${client.id}: ${payload} on`
    }
}