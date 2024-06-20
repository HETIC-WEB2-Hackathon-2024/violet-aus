import HelperRepository from './helper.repository';
import { query } from '../config/database';

class FavoriteRepository extends HelperRepository {
  constructor() {
    super('candidat_favorites', []);
  }

}

export default new FavoriteRepository();
