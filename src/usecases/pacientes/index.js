import {
    pacientesDb
} from "../../data-access/index.js";

import makeGetListaPacientes from "./getListaPacientes.js";
import makeGetDetalhesPaciente from "./getDetalhesPaciente.js";
import makePostPacientes from "./postPacientes.js";
import makeGetCodigoAcesso from "./getCodigoAcesso.js";
import makeUpdateImagemPaciente from "./updateImagemPaciente.js";

const getListaPacientes = makeGetListaPacientes(pacientesDb);
const getDetalhesPaciente = makeGetDetalhesPaciente(pacientesDb);
const postPacientes = makePostPacientes(pacientesDb);
const getCodigoAcesso = makeGetCodigoAcesso(pacientesDb);
const updateImagemPaciente = makeUpdateImagemPaciente(pacientesDb);

const pacientesService = Object.freeze({
    getListaPacientes,
    getDetalhesPaciente,
    postPacientes,
    getCodigoAcesso,
    updateImagemPaciente
});

export default pacientesService;

export {
    getListaPacientes,
    getDetalhesPaciente,
    postPacientes,
    getCodigoAcesso,
    updateImagemPaciente
};