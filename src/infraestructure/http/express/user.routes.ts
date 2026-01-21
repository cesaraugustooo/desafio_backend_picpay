import { Router, type NextFunction, type Request as expressRequest, type Response } from "express";
import { createUserController } from "../../../aplication/useCases/user/factory.js";
import { ExpresAdapter } from "./express.adapter.js";
import { validated } from "@middlewares/validated.js";
import { CreateUserSchema } from "./schemas/create.user.schema.js";

const app: Router = Router()

app.post('/register', validated(CreateUserSchema) ,(req: expressRequest, res: Response, next: NextFunction) => {
    createUserController.register(new ExpresAdapter(req, res, next))
});

export { app as UserApp }