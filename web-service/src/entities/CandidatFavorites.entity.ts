export default class CandidatFavorites {
  private candidat_id: number;
  private offre_id: number;

  constructor(candidat_id: number, offre_id: number) {
    this.candidat_id = candidat_id;
    this.offre_id = offre_id;
  }

  getCandidat_id(): number {
    return this.candidat_id;
  }

  setCandidat_id(candidat_id: number): void {
    this.candidat_id = candidat_id;
  }

  getOffre_id(): number {
    return this.offre_id;
  }

  setOffre_id(offre_id: number): void {
    this.offre_id = offre_id;
  }
}
