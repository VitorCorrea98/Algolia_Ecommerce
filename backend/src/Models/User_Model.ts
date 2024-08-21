import { PrismaClient } from '@prisma/client';
import { IUserModel } from '../Interfaces/User/CRUD/UserModel';
import { IUser } from '../Interfaces/User';

export default class UserModel implements IUserModel {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public getAll(): Promise<IUser[]> {
    const users = this.prisma.users.findMany();
    return users;
  }

  public getById(_id: number): Promise<IUser | null> {
    const user = this.prisma.users.findUnique({ where: { id: _id } });
    return user;
  }

  public getByEmail(_email: string): Promise<IUser | null> {
    const user = this.prisma.users.findUnique({ where: { email: _email } });
    return user;
  }
}
