import { Router, Request, Response } from 'express';
import settingsRouter from './settings.route';
import offreRouter from './offre.route';

const get = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Offre retrieved successfully' });
};

const router = Router();
router.use('/', get);
router.use('/offre', offreRouter);
router.use('/settings', settingsRouter);



export default router;