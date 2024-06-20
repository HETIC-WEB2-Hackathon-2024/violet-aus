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
}

export default new OffreRepository();
