export default class Candidat {
  private id: number;
  private nom?: string;
  private prenom?: string;
  private telephone?: string;
  private email: string;
  private pays: string;
  private date_naissance: Date;

  constructor( data: 
    {
      id: number,
      nom?: string,
      prenom?: string,
      telephone?: string,
      email: string,
      pays: string,
      date_naissance: Date
    }
  ) {
    this.id = data.id;
    this.nom = data.nom;
    this.prenom = data.prenom;
    this.telephone = data.telephone;
    this.email = data.email;
    this.pays = data.pays;
    this.date_naissance = data.date_naissance;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getNom(): string | undefined{
    return this.nom;
  }

  setNom(nom: string): void {
    this.nom = nom;
  }

  getPrenom(): string | undefined {
    return this.prenom;
  }

  setPrenom(prenom: string): void {
    this.prenom = prenom;
  }

  getTelephone(): string | undefined {
    return this.telephone;
  }

  setTelephone(telephone: string): void {
    this.telephone = telephone;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getPays(): string {
    return this.pays;
  }

  setPays(pays: string): void {
    this.pays = pays;
  }

  getDate_naissance(): Date {
    return this.date_naissance;
  }

  setDate_naissance(date_naissance: Date): void {
    this.date_naissance = date_naissance;
  }
}