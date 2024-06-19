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

    console.log(userinfo.email);
    const profilInfo = await CandidatRepository.getCandidatByEmail(
      userinfo.email
    );

    res.status(200).json({ message: "Ok", user: profilInfo.rows[0] });
  } catch (error) {
    console.error("Error in getSettings:", error);
    res.status(500).send({ error: "Internal Server Error", reason: error });
  }
};

// export const UpdateProfilInformations = async (req: Request, res: Response) => {
//     try {
//       // const { user } = req.body;
//       // if (!user) {
//       //   res.status(400).send({ error: "User is required" });
//       //   return;
//       // }

//       // const profilInfo = await getProfilInfo(email);
//       // res.send(profilInfo);
//       res.status(200).json({ message: "Candidat informations retrieved successfully" });
//       // res.status(200).json({ data : profilInfo });
//     } catch (error) {
//       console.error("Error in getSettings:", error);
//       res.status(500).send({ error: "Internal Server Error", reason: error });
//     }
//   }
