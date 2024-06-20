import { Request, Response } from "express";
import communeRepository from "../repositories/commune.repository";

export const getAllDepartement = async (_: Request, res: Response) => {
  try {
    const result = await communeRepository.findAllDepartement();
    const communes: Array<{ departement: string }> = result.rows;
    res.status(200).json({ message: "GetAll successfully", communes: communes });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};