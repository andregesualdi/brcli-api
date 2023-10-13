import express from "express";
import routes from "./routes/index.js";
import Configuration, { configEnvironments } from "./config.js";

const app = express();
configEnvironments();
const port = Configuration.port;

app.use(express.json());
app.use("/", routes);
app.listen(port);
console.log('Rodando na porta ' + port);

export default app;