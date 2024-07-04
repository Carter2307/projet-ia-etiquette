import express from "express";
import * as middlewares from "../middlewares/middlewares";
import * as controller from "../controllers/etiquetteController";
const router = express.Router();

router.route("/").post(middlewares.generateEtiquette, controller.create);

export default router;
