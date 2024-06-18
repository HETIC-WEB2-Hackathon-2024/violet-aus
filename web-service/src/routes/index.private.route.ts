import { Router } from 'express';
import offreRouter from './offre.route';
import settingsRouter from './settings.route';
import validateOffre from '../middlewares/validation.middleware';
import { create } from '../controllers/offre.controller';

const router = Router();

router.use('/offre', offreRouter);
router.use('/settings', settingsRouter);



export default router;