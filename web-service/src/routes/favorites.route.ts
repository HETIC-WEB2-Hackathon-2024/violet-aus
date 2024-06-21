import {
  addFavorite,
  getFavoritesDataByCandidatId,
  removeFavoriteByFavoriteId,
} from "../controllers/favorites.controller";
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", getFavoritesDataByCandidatId);
router.get("/:favorite_id", userMiddleware, removeFavoriteByFavoriteId);
router.get("/add-favorite/:favorite_id", userMiddleware, addFavorite);

export default router;
