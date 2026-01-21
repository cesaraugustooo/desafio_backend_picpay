import express from "express"
import { UserApp } from "./routes/user/user.routes.js";
import { errorMiddleware } from "@middlewares/errorMidleware.js";
import { TransactionApp } from "./routes/transaction/transaction.route.js";

const app = express();

app.use(express.json());

app.use('/users',UserApp);
app.use('/transaction',TransactionApp);

app.use(errorMiddleware);

app.listen(3000,() => { console.log('Server HTTP rodadndo na porta 3000') });