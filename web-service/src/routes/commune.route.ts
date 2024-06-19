import { Router } from "express";

import validator from "../middlewares/validator.middleware";
import { getAllDepartement } from "../controllers/commune.controller";

const router = Router();

router.get("/", getAllDepartement);

export default router;
