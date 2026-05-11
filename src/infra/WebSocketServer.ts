import { jitter } from "../utils/utils";

export class WebSocketServer {
  async start() {
    const ttl = jitter(3000);

    console.log("Web socket server started");
  }
}
