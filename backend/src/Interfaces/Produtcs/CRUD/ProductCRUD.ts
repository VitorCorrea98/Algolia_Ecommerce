export interface READProduct<T> {
  getAll(): Promise<T[]>;
  getByName(_name: string): Promise<T[] | null>;
  getById(_id: number): Promise<T | null>;
}
