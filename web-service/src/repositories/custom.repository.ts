import { query } from "../config/database";

// Your custom query
class CustomRepository {

  async countAllOffers(): Promise<any> {
    const sql = `select count(id) from offre`;
    const result = await query(sql);

    return result;
  }

  async countOfferByJob(): Promise<any> {
    const sql = `
            select count(offre.id), metier from offre
            inner join metier on offre.metier_id = metier.id
            group by metier.metier
            order by metier.metier`;
    const result = await query(sql);
    return result;
  }

  async nbrEntreprise(): Promise<any> {
    const sql = `select count(metier.metier) from offre
                 inner join metier on offre.metier_id = metier.id
    `;
    const result = await query(sql);

    return result;
  }
}

export default new CustomRepository();
