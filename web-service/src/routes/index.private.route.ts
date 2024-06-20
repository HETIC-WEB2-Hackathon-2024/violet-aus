import { Router, Request, Response } from "express";

import offreRouter from "./offre.route";
import dashboardRouter from "./dashboard.route";
import favoritesRouter from "./favorites.route";

const get = (req: Request, res: Response) => {
  res.status(200).json({ message: "Your in index private route" });
};

const router = Router();
router.use("/offre", offreRouter);
router.use("/dashboard", dashboardRouter);
router.use("/favorites", favoritesRouter);
router.use("/", get);

export default router;
