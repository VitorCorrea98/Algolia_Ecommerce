import { Router } from 'express';
import userRouter from './User_Route';

const router = Router();

router.use('/users', userRouter);

export default router;