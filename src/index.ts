import http from "http";
import { acc } from "./run";
import { exampleUsage } from "./services/connection";

// import { main } from "./services/connection";

export const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(
    JSON.stringify({
      data: acc,
    })
  );
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});

exampleUsage().catch(console.error);
