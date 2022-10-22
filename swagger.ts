const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./routes.json";
const endpointsFiles = ["./routes/routes.ts"];

swaggerAutogen(outputFile, endpointsFiles);
