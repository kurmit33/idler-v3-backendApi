import "reflect-metadata";
import {Server} from "typescript-rest";
import * as express from "express";
import * as http from 'http';
import * as cors from 'cors';
import * as morgan from 'morgan';

export class RestApiServer {
    public PORT: number = Number(process.env.PORT) || 3000;
    private readonly app: express.Application;
    public server!: http.Server;

    constructor() {
        this.app = express();
        this.config();

        Server.loadServices(this.app, 'controllers/rest/*', __dirname);
    }

    config() {
        this.app.use(cors());
        this.app.use(morgan('combined'));
    }

    public async start() {
        return new Promise<any>((resolve, reject) => {
            this.app.listen(this.PORT, (err: any) => {
                if (err) {
                    return reject(err);
                }
                return resolve(this.PORT);
            })
        })
    }

    public async stop() {
        return new Promise<boolean>((resolve) => {
            if(this.server) {
                this.server.close(() => {
                    return resolve(true);
                })
            } else {
                return resolve(true);
            }
        } )
    }
}
