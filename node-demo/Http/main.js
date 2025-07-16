import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
const server = createServer(async (req, res) => {
  if (req.url === "/" || req.url === "home") {
    const data = await readFile("./data.json", "utf-8");
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.parse(data));
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 sorry");
  }
});

server.listen(3000);
