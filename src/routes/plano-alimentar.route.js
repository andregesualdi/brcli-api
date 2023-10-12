import express from "express";

import planoAlimentarController from "../controllers/planoAlimentarController/plano-alimentar.controller.js";
import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/plano-alimentar').get(makeCallback(planoAlimentarController.getPlanoAlimentar));
router.route('/plano-alimentar').post(makeCallback(planoAlimentarController.postPlanoAlimentar));

export default router;