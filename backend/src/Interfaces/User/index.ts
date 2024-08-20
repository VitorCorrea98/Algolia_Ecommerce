import { ID } from '..';

export interface User extends ID {
  name: string,
  email: string,
  password: string
}