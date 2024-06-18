export default class DateDebutStage {
  private offre_id: number;
  private debut_stage: Date;
  private mois_de_stage: number;

  constructor(offre_id: number, debut_stage: Date, mois_de_stage: number) {
    this.offre_id = offre_id;
    this.debut_stage = debut_stage;
    this.mois_de_stage = mois_de_stage;
  }

  getOffre_id(): number {
    return this.offre_id;
  }

  setOffre_id(offre_id: number): void {
    this.offre_id = offre_id;
  }

  getDebut_stage(): Date {
    return this.debut_stage;
  }

  setDebut_stage(debut_stage: Date): void {
    this.debut_stage = debut_stage;
  }

  getMois_de_stage(): number {
    return this.mois_de_stage;
  }

  setMois_de_stage(mois_de_stage: number): void {
    this.mois_de_stage = mois_de_stage;
  }
}