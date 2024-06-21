import { Router } from "express";

import {
  getLinkedInPage,
} from "../controllers/proxy.controller";

const router = Router();

router.get("/linkedin/:id", getLinkedInPage);

export default router;
