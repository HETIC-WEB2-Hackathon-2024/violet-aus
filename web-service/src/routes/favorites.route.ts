import { Router } from "express";
import {
    getFavoritesByCandidatId
} from "../controllers/favorites.controller";

const router = Router();

router.get("/my-favorites", getFavoritesByCandidatId);

export default router;
