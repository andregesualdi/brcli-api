import express from "express";
import agendamento from "./agendamento.routes.js";
import agenda from "./agenda.route.js";
import avaliacao from "./avaliacao.route.js";
import metas from "./metas.route.js";
import planoAlimentar from "./plano-alimentar.route.js";
import pacientes from "./paciente.route.js";

const router = express.Router();

router.use(agendamento);
router.use(agenda);
router.use(avaliacao);
router.use(metas);
router.use(planoAlimentar);
router.use(pacientes);

export default router;