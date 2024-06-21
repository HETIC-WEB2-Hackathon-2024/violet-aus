import { Router } from "express";
import {
  countOffer,
  countOfferByJob,
  getAllInfos,
  nbrEntreprise,
  lastOffer
} from "../controllers/dashboard.controller";

const router = Router();

router.get("/", getAllInfos);
router.get("/countoffer", countOffer);
router.get("/countofferbyjob", countOfferByJob);
router.get("/nbrentreprise", nbrEntreprise);
router.get("/lastoffer", lastOffer);

export default router;
