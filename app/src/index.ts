import express, { Express } from "express";
import dotenv from "dotenv";

import routes from "./routes/routes";

dotenv.config();

const app: Express = express();
const port: string | 3000 = process.env.PORT || 3000;

app.use(routes);

app.listen(port, (): void => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});