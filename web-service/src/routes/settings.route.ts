import { Router } from "express";
import { getProfilInformations } from "../controllers/settings.controller";

const router = Router();

router.post("/", getProfilInformations);

export default router;
