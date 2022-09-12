const http = require("http");
const routes = require("./routes/routes");
const httpPort = 80;

let app = routes();

var httpServer = http.createServer(app);

httpServer.listen(httpPort, () => {
  console.log("http://domain.name");
});
