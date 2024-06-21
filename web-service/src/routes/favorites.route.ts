import {
  addFavorite,
  getFavoritesDataByCandidatId,
  removeFavoriteByFavoriteId,
} from "../controllers/favorites.controller";
import { Router, Request, Response } from "express";
import userMiddleware from "../middlewares/user.middleware";

const router = Router();

router.get("/", userMiddleware, getFavoritesDataByCandidatId);
router.get("/:favorite_id", userMiddleware, removeFavoriteByFavoriteId);
router.get("/add-favorite/:favorite_id", userMiddleware, addFavorite);

export default router;
