import { Router } from "express";
import {
  countOffer,
  countOfferByJob,
} from "../controllers/dashboard.controller";

const router = Router();

router.get("/countoffer", countOffer);
router.get("/countofferbyjob", countOfferByJob);

export default router;
