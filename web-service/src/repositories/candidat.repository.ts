import HelperRepository from "./helper.repository";
import { query } from "../config/database";

class CandidatRepository extends HelperRepository {
  constructor() {
    super("candidat");
  }

  async findByEmail(email: string): Promise<any> {
    const sql = `SELECT * FROM candidat WHERE email = $1`;
    const result = await query(sql, [email]);
    return result;
  }
}

export default new CandidatRepository();
