import { query } from "../config/database";

class CandidatRepository {
  async getCandidatByEmail(email: string): Promise<any> {
    const sql = `SELECT * FROM candidat WHERE email = '${email}'`;
    const result = await query(sql);
    return result;
  }
}

export default new CandidatRepository();
