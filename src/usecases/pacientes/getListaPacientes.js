import { PacienteResumo } from "../../models/index.js";

export default function makeGetListaPacientes(db) {
    return async function getListaPacientes({headers}) {
        const response = await db.listarPacientes(headers['codigo-usuario']);
        if (response[0] && response[0].length > 0) {
            let pacientes = response[0].map((el) => {
                return new PacienteResumo(el.idPaciente, el.nome, el.imagem);
            })
            if (pacientes.length > 0) {
                pacientes = pacientes.sort((a,b) => {
                    const nomeA = a.nome.toUpperCase();
                    const nomeB = b.nome.toUpperCase();
                    return (nomeA < nomeB) ? -1 : (nomeA > nomeB) ? 1 : 0;
                });
            }
            return pacientes;
        } else {
            return undefined;
        }
    }
};