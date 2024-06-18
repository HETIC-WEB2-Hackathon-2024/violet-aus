import { Router } from 'express';

import validator from '../middlewares/validator.middleware'
import { getById , getAll, createOne } from '../controllers/offre.controller';
import  createOffreDto  from './dto/offre/createOffre.dto';



const router = Router();

router.get('/:id', getById)
router.get('/', getAll);;
router.post('/', validator(createOffreDto), createOne);

export default router;