import { Router, type NextFunction, type Request, type Response } from "express";
import { validated } from "../../middlewares/validated.js";
import { CreateDTO } from "../dto/user.dto.js";
import { UserController } from "../controllers/user.controller.js";
import { userController } from "../index.js";
 
const app = Router();

app.post('/register', validated(CreateDTO),(req: Request, res: Response, next: NextFunction) => {
    userController.register(req,res,next);
});

export { app };