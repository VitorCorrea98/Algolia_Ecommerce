import { Request, Response } from 'express';
import UserService from '../Services/User_Service';
import { mapHttpStatus } from '../Utils/mapHttpStatus';

export default class UserController {
  private userService;

  constructor() {
    this.userService = new UserService();
  }
  
  public async getAll(req: Request, res: Response) {
    const { status, data } = await this.userService.getAll();
    return res.status(mapHttpStatus(status)).json(data);
  }
}