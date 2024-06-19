import HelperRepository from './helper.repository';
import { query } from '../config/database';

class OffreRepository extends HelperRepository {
  constructor() {
    super('offre', [
      {key:"secteur_id", reference: "secteur"},
      {key:"metier_id", reference: "metier"},
      {key:"commune_id", reference: "commune"}
    ]); 
  }

}

export default new OffreRepository();
