export default  class CandidatCommunes {
  private candidat_id: number;
  private commune_id: string;

  constructor(candidat_id: number, commune_id: string) {
    this.candidat_id = candidat_id;
    this.commune_id = commune_id;
  }

  getCandidat_id(): number {
    return this.candidat_id;
  }

  setCandidat_id(candidat_id: number): void {
    this.candidat_id = candidat_id;
  }

  getCommune_id(): string {
    return this.commune_id;
  }

  setCommune_id(commune_id: string): void {
    this.commune_id = commune_id;
  }
}