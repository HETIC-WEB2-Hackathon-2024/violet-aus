export default class Metier {
  private id: number;
  private secteur_id: number;
  private metier: string;

  constructor(id: number, secteur_id: number, metier: string) {
    this.id = id;
    this.secteur_id = secteur_id;
    this.metier = metier;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getSecteur_id(): number {
    return this.secteur_id;
  }

  setSecteur_id(secteur_id: number): void {
    this.secteur_id = secteur_id;
  }

  getMetier(): string {
    return this.metier;
  }

  setMetier(metier: string): void {
    this.metier = metier;
  }
}