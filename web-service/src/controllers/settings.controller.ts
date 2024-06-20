import { Request, Response } from "express";
import CandidatRepository from "../repositories/candidat.repository";

export const getProfilInformations = async (req: Request, res: Response) => {
  try {
    const token = req.auth?.token;
    const userinfoResponse = await fetch(
      "https://violet-aus.eu.auth0.com/userinfo",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const userinfo = await userinfoResponse.json();

    const profilInfo = await CandidatRepository.getCandidatByEmail(
      userinfo.email
    );

    res.status(200).json({ message: "Ok", user: profilInfo.rows[0] });
  } catch (error) {
    console.error("Error in getSettings:", error);
    res.status(500).send({ error: "Internal Server Error", reason: error });
  }
};

export const updateProfilInformations = async (req: Request, res: Response) => {
  try {
    const { candidateInfo } = req.body;
    if (!candidateInfo) {
      res.status(400).send({ error: "Candidate's informations are required" });
      return;
    }

    const profilInfo = await CandidatRepository.updateCandidatByEmail(
      candidateInfo
    );

    res
      .status(200)
      .json({ message: "Candidate's informations updated successfully" });
  } catch (error) {
    console.error("Error in getSettings:", error);
    res.status(500).send({ error: "Internal Server Error", reason: error });
  }
};
