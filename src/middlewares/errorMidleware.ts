import type { NextFunction,  Request, Response } from "express";
import { AppError } from "../errorHandler.js";

export const errorMiddleware = (error: Error,req: Request,res: Response,next: NextFunction) => {
    if(error instanceof AppError){
        return res.status(error.statusCode).json({message: error.message});
    }
    console.log(error);
    return res.status(500).json({message: "erro de servidor."});
}