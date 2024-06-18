export default class Commune {
  private id: string;
  private code_commune_INSEE: string;
  private nom_commune_postal: string;
  private code_postal: number;
  private libelle_acheminement: string;
  private lat_long?: number;
  private code_commune: number;
  private article?: string;
  private nom_commune: string;
  private nom_commune_complet: string;
  private code_departement: string;
  private nom_departement: string;
  private code_region: number;
  private nom_region: string;

  constructor(
    id: string,
    code_commune_INSEE: string,
    nom_commune_postal: string,
    code_postal: number,
    libelle_acheminement: string,
    code_commune: number,
    nom_commune: string,
    nom_commune_complet: string,
    code_departement: string,
    nom_departement: string,
    code_region: number,
    nom_region: string,
    lat_long ?: number,
    article?: string
  ) {
    this.id = id;
    this.code_commune_INSEE = code_commune_INSEE;
    this.nom_commune_postal = nom_commune_postal;
    this.code_postal = code_postal;
    this.libelle_acheminement = libelle_acheminement;
    this.lat_long = lat_long;
    this.code_commune = code_commune;
    this.article = article;
    this.nom_commune = nom_commune;
    this.nom_commune_complet = nom_commune_complet;
    this.code_departement = code_departement;
    this.nom_departement = nom_departement;
    this.code_region = code_region;
    this.nom_region = nom_region;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getCode_commune_INSEE(): string {
    return this.code_commune_INSEE;
  }

  setCode_commune_INSEE(code_commune_INSEE: string): void {
    this.code_commune_INSEE = code_commune_INSEE;
  }

  getNom_commune_postal(): string {
    return this.nom_commune_postal;
  }

  setNom_commune_postal(nom_commune_postal: string): void {
    this.nom_commune_postal = nom_commune_postal;
  }

  getCode_postal(): number {
    return this.code_postal;
  }

  setCode_postal(code_postal: number): void {
    this.code_postal = code_postal;
  }

  getLibelle_acheminement(): string {
    return this.libelle_acheminement;
  }

  setLibelle_acheminement(libelle_acheminement: string): void {
    this.libelle_acheminement = libelle_acheminement;
  }

  getLat_long(): number | undefined {
    return this.lat_long;
  }

  setLat_long(lat_long: number | undefined): void {
    this.lat_long = lat_long;
  }

  getCode_commune(): number {
    return this.code_commune;
  }

  setCode_commune(code_commune: number): void {
    this.code_commune = code_commune;
  }

  getArticle(): string | undefined {
    return this.article;
  }

  setArticle(article: string | undefined): void {
    this.article = article;
  }

  getNom_commune(): string {
    return this.nom_commune;
  }

  setNom_commune(nom_commune: string): void {
    this.nom_commune = nom_commune;
  }

  getNom_commune_complet(): string {
    return this.nom_commune_complet;
  }

  setNom_commune_complet(nom_commune_complet: string): void {
    this.nom_commune_complet = nom_commune_complet;
  }

  getCode_departement(): string {
    return this.code_departement;
  }

  setCode_departement(code_departement: string): void {
    this.code_departement = code_departement;
  }

  getNom_departement(): string {
    return this.nom_departement;
  }

  setNom_departement(nom_departement: string): void {
    this.nom_departement = nom_departement;
  }

  getCode_region(): number {
    return this.code_region;
  }

  setCode_region(code_region: number): void {
    this.code_region = code_region;
  }

  getNom_region(): string {
    return this.nom_region;
  }

  setNom_region(nom_region: string): void {
    this.nom_region = nom_region;
  }
}
