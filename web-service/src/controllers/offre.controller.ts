import { Request, Response } from 'express';
import offreRepository from '../repositories/offre.repository';
import Offre from '../entities/Offre.entity';


export const getById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);

    const result = await offreRepository.findById(id);
    const offre: Offre = new Offre(result.rows[0])

    res.status(200).json({ message: 'Offre retrieved successfully', offre: offre });
  
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await offreRepository.findAll();
    const offres: Offre[] = result.rows.map(
      (offreData: any) => new Offre(offreData)
    );

    res
      .status(200)
      .json({ message: "Offres retrieved successfully", offres: offres });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const createOne = async (req: Request, res: Response) => {
  try {
    const result = await offreRepository.createOne(req.body);
    const offre: Offre = new Offre(result.rows[0]);

    res.status(200).json({ message: "Create successfully", offre: offre });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const result = await offreRepository.create(req.body);
    const offres: Offre[] = result.rows.map(
      (offreData: any) => new Offre(offreData)
    );

    res.status(200).json({ message: "Create successfully", offre: offres });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);

    const result = await offreRepository.deleteById(id);

    res.status(200).json({ message: "Delete successfully", offre: 1 });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const updateById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);

    const result = await offreRepository.updateById(id, req.body);
    const offre: Offre = new Offre(result.rows[0]);

    res
      .status(200)
      .json({ message: "Offre retrieved successfully", offre: offre });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// export const getByIdExtend = async (req: Request, res: Response) => {
//   try {
//     const id = parseInt(req.params.id, 10);

//     const result = await offreRepository.findByIdExtend(id);
//     const offre: Offre = new Offre(result.rows[0])

//     res.status(200).json({ message: 'Offre retrieved successfully', offre: offre });

//   } catch (error: any) {
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
//   }
// };
