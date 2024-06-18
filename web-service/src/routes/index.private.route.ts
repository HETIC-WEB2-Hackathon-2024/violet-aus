import { Router } from 'express';
import offreRouter from './offre.route';
import validateOffre from '../middlewares/validation.middleware';
import { create } from '../controllers/offre.controller';

const router = Router();

router.use('/offre', offreRouter);



export default router;