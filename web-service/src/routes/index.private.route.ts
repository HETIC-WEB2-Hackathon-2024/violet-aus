import { Router, Request, Response } from "express";
import settingsRouter from "./settings.route";
import offreRouter from "./offre.route";
import communeRouter from "./commune.route";
import dashboardRouter from "./dashboard.route";

const get = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Your in index private route' });
};

const router = Router();
router.use("/offre", offreRouter);
router.use("/commune", communeRouter);
router.use("/settings", settingsRouter);
router.use("/dashboard", dashboardRouter);
router.use("/", get);

export default router;
