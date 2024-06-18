import Offre from '../entities/offre.entity';
import HelperRepository from './helper.repository';
import { query } from '../config/database';

class OffreRepository extends HelperRepository {
  
  // async getOffreById(id: number): Promise<Offre | null> {
  //   return this.getById('offre', id);
  // }
}

export default new OffreRepository();