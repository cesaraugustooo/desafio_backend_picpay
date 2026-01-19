import type { IHtppContext, Request } from "@interfaces/controller.interface.js";
import { type Response, type Request as RequestExpress, type NextFunction } from "express";

export class ExpresAdapter implements IHtppContext{
    constructor(private request: RequestExpress, private response: Response, private nextMiddleware: NextFunction) {}

    getRquest(): Request {
        return {
            user: (this.request as any).user,
            body: this.request.body,
            params: this.request.params
        }
    }

    send(httpStatus: number, data: any): void {
        this.response.status(httpStatus).json(data)
    }

    next(middleware: any): void {
        this.nextMiddleware(middleware);
    }
}