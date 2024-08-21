import { Router, Request, Response } from 'express';
import UserController from '../Controllers/User_Controller';

const userController = new UserController();

const userRouter = Router();

userRouter.get('/', (req: Request, res: Response) => userController.getAll(req, res));

export default userRouter;