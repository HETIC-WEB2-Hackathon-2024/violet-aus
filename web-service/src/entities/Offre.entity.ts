import Secteur from "./Secteur.entity";

export default class Offre {
  private id: number;
  private secteur : Secteur;
  private metier_id: number;
  private titre_emploi: string;
  private entreprise: string;
  private lieu: string;
  private description_courte: string;
  private contrat: string;
  private type_contrat: string;
  private description: string;
  private commune_id: string;

  constructor( data: 
      {
        id: number,
        secteur_id?: number,
        secteur?: {id : number, secteur: string},
        metier_id: number,
        titre_emploi: string,
        entreprise: string,
        lieu: string,
        description_courte: string,
        contrat: string,
        type_contrat: string,
        description: string,
        commune_id: string
    }
  ) 
  {
    this.id = data.id;
    this.secteur = data.secteur? new Secteur(data.secteur): new Secteur({id : data.secteur_id || 0, secteur: ''});
    this.metier_id = data.metier_id;
    this.titre_emploi = data.titre_emploi;
    this.entreprise = data.entreprise;
    this.lieu = data.lieu;
    this.description_courte = data.description_courte;
    this.contrat = data.contrat;
    this.type_contrat = data.type_contrat;
    this.description = data.description;
    this.commune_id = data.commune_id;
  }

   getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getSecteur(): Secteur {
    return this.secteur;
  }

  setSecteur(secteur: Secteur): void {
    this.secteur = secteur;
  }

  getMetier_id(): number {
    return this.metier_id;
  }

  setMetier_id(metier_id: number): void {
    this.metier_id = metier_id;
  }

  getTitre_emploi(): string {
    return this.titre_emploi;
  }

  setTitre_emploi(titre_emploi: string): void {
    this.titre_emploi = titre_emploi;
  }

  getEntreprise(): string {
    return this.entreprise;
  }

  setEntreprise(entreprise: string): void {
    this.entreprise = entreprise;
  }

  getLieu(): string {
    return this.lieu;
  }

  setLieu(lieu: string): void {
    this.lieu = lieu;
  }

  getDescription_courte(): string {
    return this.description_courte;
  }

  setDescription_courte(description_courte: string): void {
    this.description_courte = description_courte;
  }

  getContrat(): string {
    return this.contrat;
  }

  setContrat(contrat: string): void {
    this.contrat = contrat;
  }

  getType_contrat(): string {
    return this.type_contrat;
  }

  setType_contrat(type_contrat: string): void {
    this.type_contrat = type_contrat;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getCommune_id(): string {
    return this.commune_id;
  }

  setCommune_id(commune_id: string): void {
    this.commune_id = commune_id;
  }
}