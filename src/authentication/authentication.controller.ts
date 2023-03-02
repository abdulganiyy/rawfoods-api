import userModel from "../user/user.model";
import Controller from "../interfaces/controller.interface";
import { Request, Response, NextFunction, Router } from "express";
import AuthenticateUserDto from "./authenticateuser.dto";
import UserWithThatEmailAlreadyExistsException from "../exceptions/UserWithThatEmailAlreadyExistsException";
import * as bcrypt from "bcrypt";

class AuthenticationController implements Controller {
  public path: string = "auth";
  public router: Router = Router();
  private user = userModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, this.register);
  }

  private register = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const reqBody: AuthenticateUserDto = request.body;

    if (await this.user.findOne({ email: reqBody.email })) {
      next(new UserWithThatEmailAlreadyExistsException(reqBody.email));
    } else {
      const hashedPassword = bcrypt.hash(reqBody.password, 10);
      const user = await this.user.create({
        ...reqBody,
        password: hashedPassword,
      });

      user.password = undefined;

      response.status(201).send(user);
    }
  };
}

export default AuthenticationController;
