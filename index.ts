const http = require("http");
import {Routes} from "./routes/routes"
const httpPort = 80;

let app = Routes();

var httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
  console.log("http://domain.name");
});
