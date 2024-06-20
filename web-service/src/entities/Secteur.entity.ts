export default class Secteur {
  private id: number;
  private secteur: string;

  constructor(data: {id: number, secteur: string}) {
    this.id = data.id;
    this.secteur = data.secteur;
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