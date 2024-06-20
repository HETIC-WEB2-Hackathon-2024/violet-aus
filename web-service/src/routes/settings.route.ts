import { Router } from "express";
import {
  getProfilInformations,
  updateProfilInformations,
} from "../controllers/settings.controller";

const router = Router();

router.get("/", getProfilInformations);
router.post("/", updateProfilInformations);

export default router;
