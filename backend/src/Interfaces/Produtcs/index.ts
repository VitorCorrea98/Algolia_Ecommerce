import { ID } from '..';

export interface IProduct extends ID {
  name: string,
  content: string,
  description: string
  value: number
}