import { Router } from "express";
import {
  getProfilInformations,
  updateProfilInformations,
} from "../controllers/settings.controller";
import validator from "../middlewares/validator.middleware";
import updateCandidateDto from "./dto/candidat/updateCandidat.dto";

const router = Router();

router.get("/", getProfilInformations);
router.patch("/", validator(updateCandidateDto) ,updateProfilInformations);

export default router;
