import express from "express";

import metasController from "../controllers/metasController/metas.controller.js";
import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/metas').get(makeCallback(metasController.getMetas));
router.route('/metas').post(makeCallback(metasController.postMetas));

export default router;