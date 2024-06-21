import { Router } from "express";
import {
  countOffer,
  countOfferByJob,
  getAllInfos,
} from "../controllers/dashboard.controller";

const router = Router();

router.get("/", getAllInfos);
router.get("/countoffer", countOffer);
router.get("/countofferbyjob", countOfferByJob);

export default router;
