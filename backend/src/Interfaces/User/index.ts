import { ID } from '..';

export interface IUser extends ID {
  name: string;
  email: string;
  password: string;
}