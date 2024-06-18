import { Router, Request, Response } from 'express';

import offreRouter from './offre.route';

const get = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Offre retrieved successfully' });
};

const router = Router();
router.use('/', get);
router.use('/offre', offreRouter);



export default router;