import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IUser } from '../Interfaces/User';
import UserModel from '../Models/User_Model';

export default class UserService {
  private userModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public async getAll(): Promise<ServiceResponse<IUser[]>> {
    const users = await this.userModel.getAll();
    return { status: 'SUCCESSFUL', data: users };
  }
}