import { Request, Response } from "express";
import offreRepository from "../repositories/offre.repository";

export const getLinkedInPage = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);

    const result = await offreRepository.findById(id);
    const enterpriseName = result.rows[0].entreprise;
    const nameForUrl = enterpriseName.replace(/ /g, '-').replace(/!/g, '-').toLowerCase();

    const fetchURL = `https://www.linkedin.com/company/${nameForUrl}/`;

    try {
      const response = await fetch(fetchURL);
      const documentText = await response.text();

      if (!documentText.includes("<title>LinkedIn</title>") && enterpriseName != "N/A") {
        res.status(200).json({ message: "LinkedIn page retrieved successfully", url : fetchURL });
      } else {
        res.status(404).json({ message: "Fetch error", error: "LinkedIn page does not exist" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: "LinkedIn fetch error" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};