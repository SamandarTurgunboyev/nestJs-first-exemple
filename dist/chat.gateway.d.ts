import { Server, Socket } from "socket.io";
export declare class ChatGateway {
    server: Server;
    handleConnect(client: Socket): string;
    handeleDisconnect(client: Socket): void;
    handleMessage(client: Socket, payload: string): string;
}
