import { Router, Request, Response } from "express";

export const getProfilInformations = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    if (!user) {
      res.status(400).send({ error: "User is required" });
      return;
    }

    // const profilInfo = await getProfilInfo(email);
    // res.send(profilInfo);
    res.status(200).json({ message: "Candidat informations retrieved successfully" });
    // res.status(200).json({ data : profilInfo });
  } catch (error) {
    console.error("Error in getSettings:", error);
    res.status(500).send({ error: "Internal Server Error", reason: error });
  }
}

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
  