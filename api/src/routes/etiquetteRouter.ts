import express from "express";
import * as controller from "../controllers/etiquetteController";
import {auth} from "../middlewares/middlewares";

const router = express.Router();

router.route("/").post(auth, controller.create);
router.route("/").get(auth, controller.getAll);
router.route("/:id").get(auth, controller.getEtiquette);

export default router;
