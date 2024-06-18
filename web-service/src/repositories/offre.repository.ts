import HelperRepository from './helper.repository';
import { query } from '../config/database';

class OffreRepository extends HelperRepository {
  constructor() {
    super('offre'); // offre = table name
  }

}

export default new OffreRepository();
