import express from "express";

import avaliacaoController from "../controllers/avaliacaoController/avaliacao.controller.js";
import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/avaliacao').get(makeCallback(avaliacaoController.getAvaliacao));
router.route('/avaliacao').post(makeCallback(avaliacaoController.postAvaliacao));

export default router;