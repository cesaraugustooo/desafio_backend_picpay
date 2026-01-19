import express from "express";
import { prisma } from "../prisma/database.js";
import { validated } from "./middlewares/validated.js";
import { CreateDTO } from "./user/dto/user.dto.js";
import { app as userApp } from "./user/route/user.route.js"
import { errorMiddleware } from "./middlewares/errorMidleware.js";

const app = express()

app.use(express.json());

app.use('/users', userApp);

app.use(errorMiddleware);

app.listen(3000,() => {console.log("Server HTTP rodando na porta 3000")})

