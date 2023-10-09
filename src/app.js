import express from "express";
import routes from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/", routes);
app.listen(port);
console.log('Rodando na porta ' + port);

export default app;