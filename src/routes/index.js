import express from "express";
import agendamento from "./agendamento.routes.js";
import agenda from "./agenda.route.js";
import avaliacao from "./avaliacao.route.js";
import metas from "./metas.route.js";

const router = express.Router();

router.use(agendamento);
router.use(agenda);
router.use(avaliacao);
router.use(metas);

export default router;