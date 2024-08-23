import { PrismaClient } from '@prisma/client';
import { IProductModel } from '../Interfaces/Produtcs/CRUD/ProductModel';
import { IProduct } from '../Interfaces/Produtcs';

export default class ProductModel implements IProductModel {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getAll() {
    const products = await this.prisma.products.findMany();
    return products;
  }

  public async getByName(_name: string): Promise<IProduct[] | null> {
    const produtcs = await this.prisma.products.findMany({ where: { name: _name } });
    return produtcs;
  }

  public async getById(_id: number): Promise<IProduct | null> {
    const product = await this.prisma.products.findUnique({ where: { id: _id } });
    return product;
  }
}