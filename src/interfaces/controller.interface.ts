import type { User } from "@domain/entitys/User.js";

export interface Request {
    user: User | any,
    params: any,
    body: any
}

export interface IHtppContext {
    getRquest(): Request;
    send(httpStatus: number,data: any): void;
    next(middleware: any): void;
}