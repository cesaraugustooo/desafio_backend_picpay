import express from "express"
import { UserApp } from "./user.routes.js";
import { errorMiddleware } from "@middlewares/errorMidleware.js";

const app = express();

app.use(express.json());

app.use('/users',UserApp);

app.use(errorMiddleware);

app.listen(3000,() => { console.log('Server HTTP rodadndo na porta 3000') });