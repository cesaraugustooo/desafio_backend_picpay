import { CreateTransactionController } from "@factorys/Transactionfactory.js";
import { Router, type Request, type Response, type NextFunction } from "express";
import { ExpresAdapter } from "../../express.adapter.js";

const app = Router()

app.post("",(req: Request, res: Response, next: NextFunction) => {
    CreateTransactionController.create(new ExpresAdapter(req,res,next))
});

export { app as TransactionApp }