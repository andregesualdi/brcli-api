import express from "express";

import pacientesController from "../controllers/pacientesController/pacientes.controller.js";
import makeCallback from "./make-callback.js";

const router = express.Router();

router.route('/pacientes').get(makeCallback(pacientesController.getListaPacientes));
router.route('/paciente').get(makeCallback(pacientesController.getDetalhesPaciente));
router.route('/codigo-acesso').get(makeCallback(pacientesController.getCodigoAcesso));
router.route('/paciente').post(makeCallback(pacientesController.postPacientes));
router.route('/paciente').put(makeCallback(pacientesController.updateImagemPaciente));

export default router;