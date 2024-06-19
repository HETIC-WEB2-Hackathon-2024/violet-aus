import { Router } from 'express';

import createOffreDto from './dto/offre/createOffre.dto';
import updateOffreDto from './dto/offre/updateOffre.dto';
import validator from '../middlewares/validator.middleware'
import { getById , getAll, createOne, create, deleteById, updateById} from '../controllers/offre.controller';

const router = Router();

router.post('/many', create);
// router.get('/extend/:id', getByIdExtend);
router.get('/:id', getById);
router.get('/', getAll);
router.post('/', validator(createOffreDto), createOne);
router.patch('/:id', validator(updateOffreDto), updateById);
router.delete('/:id', deleteById);

export default router