import { Request, Response } from 'express';
import offreRepository from '../repositories/offre.repository';

export const getOffreById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    // const offre = await offreRepository.getOffreById(id);
    res.status(200).json({ message: 'Offre retrieved successfully', offre: 1 });
  
  } catch (error: any) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

export  const create = async (req: Request, res: Response) => {
  try {
    console.log('test')
    res.status(200).json({ message: 'Offre retrieved successfully', offre: 1 });

  } catch (error: any) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message});
  }
};