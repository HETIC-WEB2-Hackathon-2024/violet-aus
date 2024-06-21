import HelperRepository from "./helper.repository";
import { query } from "../config/database";

class FavoriteRepository extends HelperRepository {
  constructor() {
    super("candidat_favorites", []);
  }

  async findFavoritesByCandidatId(id: number): Promise<any> {
    const sql = `SELECT * FROM candidat_favorites WHERE candidat_id = $1`;
    const result = await query(sql, [id]);
    return result;
  }

  async findFavoritesDataByCandidatId(id: number): Promise<any> {
    const sql = `SELECT * FROM offre WHERE id IN 
    (SELECT offre_id FROM candidat_offres WHERE offre_id IN 
    (SELECT offre_id FROM candidat_favorites WHERE candidat_id IN 
      (SELECT candidat_id FROM candidat_favorites WHERE candidat_id = $1)));
    `;
    const result = await query(sql, [id]);
    return result;
  }

  async removeFavoriteByFavoriteId(
    favorite_id: number,
    candidat_id: number
  ): Promise<any> {
    const sql = `DELETE FROM candidat_favorites WHERE offre_id = $1 AND candidat_id = $2`;
    const result = await query(sql, [favorite_id, candidat_id]);
    return result;
  }
}

export default new FavoriteRepository();
