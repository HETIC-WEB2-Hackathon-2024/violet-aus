import { Router } from "express";

import { getAllDepartement } from "../controllers/commune.controller";

const router = Router();

router.get("/", getAllDepartement);

export default router;
