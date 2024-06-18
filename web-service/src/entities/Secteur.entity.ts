export default class Secteur {
  private id: number;
  private secteur: string;

  constructor(id: number, secteur: string) {
    this.id = id;
    this.secteur = secteur;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getSecteur(): string {
    return this.secteur;
  }

  setSecteur(secteur: string): void {
    this.secteur = secteur;
  }
}