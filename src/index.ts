import { WebSocketServer } from "./infra/WebSocketServer";

const ws = new WebSocketServer();

function main() {
  ws.start();
}

main();
