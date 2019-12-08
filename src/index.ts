import {WebSocketServer} from "./server-configurations/webSocketServer";
import {createConnection} from "typeorm";
import {RestApiServer} from "./server-configurations/restApiServer";
import {error} from "util";

const webSocketServer = new WebSocketServer();
const restApiServer = new RestApiServer();
createConnection().then(() => {
    webSocketServer.start().then(r => {console.log('Websocket Server works! PORT: '+r)}).catch(error => console.log(error.message));
    restApiServer.start().then(r => {console.log('Rest server works! PORT: '+r)}).catch(error => console.log(error.message));

}).catch(error => console.log(error.message));
