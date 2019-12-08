import "reflect-metadata";
import * as WebSocket from "ws";
import * as express from "express";
import * as http from 'http';
import {WebSocketController} from "../controllers/webSocketController";


export class WebSocketServer {
    public PORT: number = Number(process.env.PORT) || 8999;
    private readonly app: express.Application;
    public webSocketServer!: WebSocket.Server;


    constructor() {
        this.app = express();
    }

    public async start() {
        return new Promise<any>((resolve, reject ) => {
            const server: http.Server = http.createServer(this.app);
            this.webSocketServer = new WebSocket.Server({server});
            server.listen(this.PORT, (error: any) => {
                if (error) {
                    return reject(error);
                }
                //console.log('WebSocket Server started on port: '+this.PORT);
                this.config();
                return resolve(this.PORT);
            });
        });
    }

    config() {
        this.webSocketServer.on('connection', (ws: WebSocket) => {
            console.log('Client connected');
            const controller = new WebSocketController();
            ws.on('message', (message: any) => {
                controller.selectBuildngAction(message);
            });
            ws.on('close', () => {
                controller.destructor();
                console.log('Client close!');
            })
        })
    }
}
