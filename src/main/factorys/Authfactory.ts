import { AuthController } from "@controllers/auth/auth.controller.js";
import { PrismaRepository } from "@infra/adapters/repositories/prisma/user/prisma.user.adapter.js";
import { JwtToken } from "@infra/adapters/token/jwt.token.adapter.js";
import { AuthenticateUserCase } from "@useCases/auth/AuthenticateUserCase/authenticate.user.case.js";
import { LoginUseCase } from "@useCases/auth/LoginUserCase/login.use.case.js";

const repository = new PrismaRepository();
const tokenAdapter = new JwtToken();
const autenticateCase = new AuthenticateUserCase(tokenAdapter);
const loginCase = new LoginUseCase(autenticateCase, repository);
const AuthControllerFactory = new AuthController(loginCase);

export { AuthControllerFactory }