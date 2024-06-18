export default class CandidatSecteurs {
  private candidat_id: number;
  private secteur_id: number;

  constructor(candidat_id: number, secteur_id: number) {
    this.candidat_id = candidat_id;
    this.secteur_id = secteur_id;
  }

  getCandidat_id(): number {
    return this.candidat_id;
  }

  setCandidat_id(candidat_id: number): void {
    this.candidat_id = candidat_id;
  }

  getSecteur_id(): number {
    return this.secteur_id;
  }

  setSecteur_id(secteur_id: number): void {
    this.secteur_id = secteur_id;
  }
}