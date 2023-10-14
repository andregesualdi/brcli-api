import {
    getListaPacientes,
    getDetalhesPaciente,
    postPacientes,
    getCodigoAcesso,
    updateImagemPaciente,
    getPacienteMobile
} from "../../usecases/pacientes/index.js";

export default Object.freeze({
    getListaPacientes: (httpRequest) => getListaPacientes(httpRequest),
    getDetalhesPaciente: (httpRequest) => getDetalhesPaciente(httpRequest),
    postPacientes: (httpRequest) => postPacientes(httpRequest),
    getCodigoAcesso: (httpRequest) => getCodigoAcesso(httpRequest),
    updateImagemPaciente: (httpRequest) => updateImagemPaciente(httpRequest),
    getPacienteMobile: (httpRequest) => getPacienteMobile(httpRequest)
});
