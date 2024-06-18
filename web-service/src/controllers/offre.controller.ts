import { Request, Response } from 'express';
import offreRepository from '../repositories/offre.repository';
import Offre from '../entities/Offre.entity';

export const getById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }

    const offre:Offre = await offreRepository.findById(id);
    res.status(200).json({ message: 'GetById successfully', offre: offre });
  
  } catch (error: any) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const offre: Offre = await offreRepository.findAll()
    res.status(200).json({ message: 'GetAll successfully', offre: offre });
  
  } catch (error: any) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

export  const createOne = async (req: Request, res: Response) => {
  try {
    console.log(req)
    const offre: Offre = await offreRepository.createOne(req.body)
    res.status(200).json({ message: 'Create successfully', offre: offre });

  } catch (error: any) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message});
  }
};