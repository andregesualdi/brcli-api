import { Paciente } from "../../models/index.js";

export default function makeGetDetalhesPaciente(db) {
    return async function getDetalhesPaciente({headers}) {
        const response = await db.detalharPaciente(headers['codigo-paciente'], headers['codigo-usuario']);
        if (response[0][0]) {
            const paciente = response[0][0];
            return new Paciente(paciente.idPaciente, paciente.codigoAcesso, paciente.dataNascimento, paciente.altura, paciente.peso, paciente.nome, paciente.nomeAcesso, paciente.email, paciente.telefone, paciente.imagem);
        } else {
            return undefined;
        }
    }
};