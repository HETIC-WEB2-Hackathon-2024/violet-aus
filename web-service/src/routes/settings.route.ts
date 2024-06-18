import { Router } from "express";
import { getProfilInformations } from "../controllers/settings.controller";

const router = Router();

router.get("/", getProfilInformations);

export default router;
