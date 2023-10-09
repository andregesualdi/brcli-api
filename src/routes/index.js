import express from "express";
import agendamento from "./agendamento.routes.js";
import agenda from "./agenda.route.js";

const router = express.Router();

router.use(agendamento);
router.use(agenda);

export default router;