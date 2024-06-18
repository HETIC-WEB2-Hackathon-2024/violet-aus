import { Router, Request, Response } from "express";

export async function getProfilInformations(req: Request, res: Response) {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).send({ error: "Email is required" });
      return;
    }

    // const profilInfo = await getProfilInfo(email);
    // res.send(profilInfo);
  } catch (error) {
    console.error("Error in getSettings:", error);
    res.status(500).send({ error: "Internal Server Error", reason: error });
  }
}
