import { WebSocketServer } from "ws";
import { awesomepackage } from "../proto/awesome";

const { AwesomeMessage } = awesomepackage;

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
	ws.on("message", function message(buffer) {
		let decoded = AwesomeMessage.decode(buffer as Uint8Array);
		console.log(`decoded = ${JSON.stringify(decoded)}`);
		console.log('received: %s', buffer);
	});

	ws.send("something");
});
