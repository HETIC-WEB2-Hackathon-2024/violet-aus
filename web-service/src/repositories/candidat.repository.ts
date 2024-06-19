import { query } from "../config/database";

class CandidatRepository {
  async getCandidatByEmail(email: string): Promise<any> {
    const sql = `SELECT * FROM candidat WHERE email = '${email}'`;
    const result = await query(sql);
    return result;
  }
  async updateCandidatByEmail(candidateInfo: any): Promise<any> {
    const sql = `UPDATE candidat SET
    nom = '${candidateInfo.lastname}',
    prenom = '${candidateInfo.firstname}',
    telephone = '${candidateInfo.telephone}',
    pays = '${candidateInfo.country}',
    date_naissance = '${candidateInfo.birthday}'
    WHERE email = '${candidateInfo.email}'`;
    const result = await query(sql);
    return result;
  }
}

export default new CandidatRepository();
