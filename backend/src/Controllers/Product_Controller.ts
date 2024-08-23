import { Request, Response } from 'express';
import ProductService from '../Services/Product_Service';
import { mapHttpStatus } from '../Utils/mapHttpStatus';

export default class ProductController {
  private productService

  constructor() {
    this.productService = new ProductService();
  }

  public async getAll(_req: Request, res: Response) {
    const { status, data } = await this.productService.getAll();
    return res.status(mapHttpStatus(status)).json(data);
  }
}