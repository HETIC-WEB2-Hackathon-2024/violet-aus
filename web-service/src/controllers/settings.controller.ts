import { Request, Response } from "express";
import CandidatRepository from "../repositories/candidat.repository";

export const getProfilInformations = async (req: Request, res: Response) => {
  try {
    const profilInfo = await CandidatRepository.findByMail(req.user.email);

    res.status(200).json({ message: "Ok", user: profilInfo.rows[0] });
  } catch (error) {
    console.error("Error in getSettings:", error);
    res.status(500).send({ error: "Internal Server Error", reason: error });
  }
};

export const updateProfilInformations = async (req: Request, res: Response) => {
  try {
    const profilInfo = await CandidatRepository.updateById(req.user.id, req.body);

    console.log(profilInfo)

    res
      .status(200)
      .json({ message: "Candidate's informations updated successfully",  data: profilInfo.rows[0]});
  } catch (error) {
    console.error("Error in getSettings:", error);
    res.status(500).send({ error: "Internal Server Error", reason: error });
  }
};
