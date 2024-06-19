import HelperRepository from "./helper.repository";
import { query } from "../config/database";

class OffreRepository extends HelperRepository {
  constructor() {
    super("offre", [
      { key: "secteur_id", reference: "secteur", columns: ["id", "secteur"] },
      { key: "metier_id", reference: "metier", columns: ["id", "metier"] },
      {
        key: "commune_id",
        reference: "commune",
        columns: [
          "id",
          "code_commune_INSEE",
          "nom_commune_postal",
          "code_postal",
          "libelle_acheminement",
          "lat_long",
          "code_commune",
          "article",
          "nom_commune",
          "nom_commune_complet",
          "code_departement",
          "nom_departement",
          "code_region",
          "nom_region",
        ],
      },
    ]);
  }

  async findOffreByFilters(filters: { titre_emploi?: string, region?: string}) {
    let queryString = `
      SELECT o.id, o.titre_emploi, o.entreprise, o.contrat, CONCAT(c.nom_region, ' (', c.code_departement, ')') AS region
      FROM offre AS o
      LEFT JOIN commune AS c ON o.commune_id = c.id
      WHERE True`;
    
    const queryParams: Array<any> = [];
    if (filters.titre_emploi && filters.titre_emploi.length > 0) {
      queryString = queryString.concat(` AND `, `(o.titre_emploi LIKE $${queryParams.length + 1} OR o.description_courte LIKE $${queryParams.length + 1})`);
      queryParams.push(`%${filters.titre_emploi}%`);
    }
    if (filters.region && filters.region.length > 0) {
      queryString = queryString.concat(` AND `, `CONCAT(c.nom_region, ' (', c.code_departement, ')') = $${queryParams.length + 1}`);
      queryParams.push(filters.region);
    }
    
    return query(queryString, queryParams);
  }
}

export default new OffreRepository();
