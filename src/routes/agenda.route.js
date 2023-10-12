import express from "express";

import agendaController from "../controllers/agendaController/agenda.controller.js";
import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/agenda').get(makeCallback(agendaController.getAgenda));

export default router;