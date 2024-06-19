import { Router, Request, Response } from "express";
import settingsRouter from "./settings.route";
import offreRouter from "./offre.route";
import dashboardRouter from "./dashboard.route";

const get = (req: Request, res: Response) => {
  res.status(200).json({ message: "Your in index private route" });
};

const router = Router();
router.use("/", get);
router.use("/offre", offreRouter);

export default router;
