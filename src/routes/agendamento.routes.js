import express from "express";

import agendamentoController from "../controllers/agendamentoController/agendamento.controller.js";
import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/agendamento').get(makeCallback(agendamentoController.getAgendamento));
router.route('/agendamento').post(makeCallback(agendamentoController.postAgendamento));

export default router;