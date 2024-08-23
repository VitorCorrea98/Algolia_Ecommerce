import { IProduct } from '../Interfaces/Produtcs';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ProductModel from '../Models/Product_Model';

export default class ProductService {
  private productModel

  constructor() {
    this.productModel = new ProductModel();
  }

  public async getAll(): Promise<ServiceResponse<IProduct[]>> {
    const products = await this.productModel.getAll();
    return { status: 'SUCCESSFUL', data: products };
  }

  public async getById(id: number): Promise<ServiceResponse<IProduct>> {
    const product = await this.productModel.getById(id);
    if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    return { status: 'SUCCESSFUL', data: product };
  }
}