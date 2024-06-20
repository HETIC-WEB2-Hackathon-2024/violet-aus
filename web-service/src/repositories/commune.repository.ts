import HelperRepository from "./helper.repository";
import { query } from "../config/database";

class CommuneRepository extends HelperRepository {
  constructor() {
    super("offre", []);
  }

  async findAllDepartement() {
    return query(`
      SELECT DISTINCT CONCAT(nom_departement, ' (', code_departement, ')') AS region
      FROM commune
      ORDER BY region`);
  }
}

export default new CommuneRepository();
