import type { NextFunction, Request, Response } from "express";
import { safeParse } from "zod";

export const validated = (dto: any) => (req: Request, res: Response, next: NextFunction) => 
    {
        const result = dto.safeParse(req.body);
        console.log(req.body);
        if(result.success == false){
            return res.status(400).json(result.error.format()); 
        }

        req.body = result.data;

        next()
    }