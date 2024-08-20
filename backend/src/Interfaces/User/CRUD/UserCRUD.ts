export interface READUser<T> {
  getAll(): Promise<T[]>;
  getByEmail(_email: string): Promise<T | null>;
  getById(_id: string): Promise<T | null>;
}
