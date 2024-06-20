import { Request, Response } from "express";
import CustomRepository from "../repositories/custom.repository";

export const getAllInfos = async (req: Request, res: Response) => {
  try {
    const countAllOffers = await CustomRepository.countAllOffers();
    const countOfferByJob = await CustomRepository.countOfferByJob();

    const infos = {
      allOffer : parseInt(countAllOffers.rows[0].count, 10) ,
      offerByJob : parseInt(countOfferByJob.rows[0].count,10),
    };

    res.status(200).json({ message: "Infos retrieved successfully", infos });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const countOffer = async (req: Request, res: Response) => {
  try {
    const count = await CustomRepository.countAllOffers();

    res.status(200).json({ message: "Infos retrieved successfully", count: count["rows"][0].count });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const countOfferByJob = async (req: Request, res: Response) => {
  try {
    const count = await CustomRepository.countOfferByJob();

    res.status(200).json({ message: "Infos retrieved successfully", count: count });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
