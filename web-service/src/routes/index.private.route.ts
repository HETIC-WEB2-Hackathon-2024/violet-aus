import { Router, Request, Response } from "express";

import offreRouter from "./offre.route";
import communeRouter from "./commune.route";
import settingsRouter from "./settings.route";
import dashboardRouter from "./dashboard.route";
import favoritesRouter from "./favorites.route";
import userMiddleware from "../middlewares/user.middleware";

const router = Router();
router.use("/offre", offreRouter);
router.use("/commune", communeRouter);
router.use("/settings", userMiddleware, settingsRouter);
router.use("/dashboard", dashboardRouter);
router.use("/favorites", favoritesRouter);

export default router;
