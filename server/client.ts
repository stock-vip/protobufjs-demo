import WebSocket from "ws";
import { awesomepackage } from "../proto/awesome";

const { AwesomeMessage } = awesomepackage;

const ws = new WebSocket("ws://localhost:8080");

ws.on("open", function open() {
	let message = AwesomeMessage.create({ awesomeField: "hello" });
	console.log(`message = ${JSON.stringify(message)}`);

	let buffer = AwesomeMessage.encode(message).finish();
	console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
	ws.send(buffer);
});

ws.on("message", function message(data) {
	console.log("received: %s", data);
});
