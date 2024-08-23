import { Router, Request, Response } from 'express';
import ProductController from '../Controllers/Product_Controller';

const productRotuer = Router();
const productController = new ProductController();

productRotuer.get('/', (req: Request, res: Response) => productController.getAll(req, res));

export default productRotuer;