import { Router } from 'express';
import { getOffreById } from '../controllers/offre.controller';

const router = Router();

router.get('/:id', getOffreById);

export default router;