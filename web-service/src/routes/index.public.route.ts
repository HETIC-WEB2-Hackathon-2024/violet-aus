import { Router, Request, Response } from 'express';

import offreRouter from './offre.route';

const get = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Your in index public route' });
};

const router = Router();
router.use('/offre', offreRouter);
router.get('/', get);


export default router;