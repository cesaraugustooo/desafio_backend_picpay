import { AuthControllerFactory } from "@factorys/Authfactory.js";
import { Router } from "express";
import { ExpresAdapter } from "@http/express/express.adapter.js";
import { type Request as expressRequest, type Response, type NextFunction } from "express";
import { validated } from "@infra/middlewares/validated.js";
import { LoginUserSchema } from "@schemas/login.user.schema.js";

const app = Router();

app.post("/login",validated(LoginUserSchema),(req: expressRequest, res: Response, next: NextFunction) => {
    AuthControllerFactory.login(new ExpresAdapter(req,res,next));
});

export { app as AuthApp }