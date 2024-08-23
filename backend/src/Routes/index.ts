import { Router } from 'express';
import userRouter from './User_Route';
import productRotuer from './Product_Route';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productRotuer);

export default router;