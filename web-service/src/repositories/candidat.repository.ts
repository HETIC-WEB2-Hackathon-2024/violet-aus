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

  async findByMail(email: string): Promise<any> {
    const sql = `SELECT * FROM candidat WHERE email = $1`;
    const result = await query(sql, [email]);
    return result;
  }

  async updateCandidatByEmail(candidateInfo: any): Promise<any> {
    const sql = `UPDATE candidat SET
    nom = $1,
    prenom = $2,
    telephone = $3,
    pays = $4,
    date_naissance = $5
    WHERE email = $6`;
    const result = await query(sql, [
      candidateInfo.lastname,
      candidateInfo.firstname,
      candidateInfo.telephone,
      candidateInfo.country,
      candidateInfo.date_naissance,
      candidateInfo.email,
    ]);
    return result;
  }
}

export default new CandidatRepository();
