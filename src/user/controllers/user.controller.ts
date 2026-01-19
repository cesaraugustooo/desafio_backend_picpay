import type { NextFunction,  Request, Response } from "express";
import type { UserService } from "../service/user.service.js";
import type { CreateIUser, IUser } from "../entity/interfaces/user.interface.js";
import { UserResource } from "../dto/user.dto.js";

export class UserController {
    constructor (
        private service: UserService,
    ) {}

    async register(req: Request,res: Response, next: NextFunction){
        try {
            const data: CreateIUser = req.body;
            const user = await this.service.register(data);

            return res.json(UserResource(user));
        } catch (error) {
            next(error)
        }
    }
}