const updateOffreDto = {
  secteur_id: { type: 'number', required: false },
  metier_id: { type: 'number', required: false },
  entreprise: { type: 'string', required: false },
  lieu: { type: 'string', required: false },
  description_courte: { type: 'string', required: false },
  contrat: { type: 'string', required: false },
  type_contrat: { type: 'string', required: false },
  description: { type: 'string', required: false },
  commune_id: { type: 'string', required: false },
}

export default updateOffreDto;
