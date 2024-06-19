import HelperRepository from "./helper.repository";
import { query } from "../config/database";

class CandidatRepository extends HelperRepository {
//   async getCandidatByEmail(email: string): Promise<Candidat | null> {
//     return this.getById('offre', id);
//   }
}

export default new CandidatRepository();


// export function getProfilInfo(email: string): Promise<any[]> {
//     return query(`SELECT * FROM candidat WHERE email = '${email}'`);
//   }
  