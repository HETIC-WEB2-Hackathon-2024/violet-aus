import {
    getFavoritesDataByCandidatId, removeFavoriteByFavoriteId
} from "../controllers/favorites.controller";
import { Router, Request, Response } from "express";

const router = Router();


router.get("/", getFavoritesDataByCandidatId);
router.get("/:favorite_id", removeFavoriteByFavoriteId)

export default router;
