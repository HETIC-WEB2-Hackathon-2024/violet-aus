import { Router } from "express";

import createOffreDto from "./dto/offre/createOffre.dto";
import updateOffreDto from "./dto/offre/updateOffre.dto";
import validator from "../middlewares/validator.middleware";
import {
  getById,
  getByFilters,
  updateById,
} from "../controllers/offre.controller";

const router = Router();

router.get("/:id", getById);
router.get("/", getByFilters);
router.patch("/:id", validator(updateOffreDto), updateById);

export default router;
