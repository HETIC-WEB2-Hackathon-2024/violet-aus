import { Router, Request, Response } from 'express';
import { create } from '../controllers/offre.controller';
import validateField from '../middlewares/validation.middleware';
import offreRouter from './offre.route';

const router = Router();


const get = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Offre retrieved successfully' });
};

const requiredFields = [
  'secteur_id'
];


router.use('/offre', offreRouter);
router.post('/', validateField(requiredFields), create);

export default router;