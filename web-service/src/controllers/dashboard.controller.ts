import { Request, Response } from "express";
import CustomRepository from "../repositories/custom.repository";

export const countOffer = async (req: Request, res: Response) => {
  try {
    const count = await CustomRepository.countAllOffers();

    res.status(200).json({ message: "oui", count: count["rows"][0].count });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const countOfferByJob = async (req: Request, res: Response) => {
  try {
    const count = await CustomRepository.countOfferByJob();

    res.status(200).json({ message: "oui", count: count });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
