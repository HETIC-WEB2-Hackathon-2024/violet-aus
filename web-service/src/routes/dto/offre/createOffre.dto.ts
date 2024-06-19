const createOffreDto = {
  secteur_id: { type: 'number', required: true },
  metier_id: { type: 'number', required: true },
  entreprise: { type: 'string', required: true },
  lieu: { type: 'string', required: true },
  description_courte: { type: 'string', required: true },
  contrat: { type: 'string', required: true },
  type_contrat: { type: 'string', required: true },
  description: { type: 'string', required: true },
  commune_id: { type: 'string', required: true },
}


export default createOffreDto;
