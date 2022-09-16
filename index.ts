const http = require("http");
import {Routes} from "./routes/routes"
const httpPort = 4000;

let app = Routes();

var httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
  console.log("http://domain.name");
});

