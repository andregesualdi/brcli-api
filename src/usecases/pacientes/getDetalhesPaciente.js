import { Paciente } from "../../models/index.js";

export default function makeGetDetalhesPaciente(db) {
    return async function getDetalhesPaciente({headers}) {
        const response = await db.detalharPaciente(headers['codigo-paciente'], headers['codigo-usuario']);
        if (response.response) {
            const paciente = response.response;
            if (response.agendado) {
                return new Paciente(paciente.idPaciente, paciente.codigoAcesso, paciente.dataNascimento, paciente.dataCadastro, paciente.dataAgendamento, paciente.horaAgendamento, paciente.altura, paciente.peso, paciente.nome, paciente.nomeAcesso, paciente.email, paciente.telefone, paciente.imagem);
            } else {
                return new Paciente(paciente.idPaciente, paciente.codigoAcesso, paciente.dataNascimento, paciente.dataCadastro, null, null, paciente.altura, paciente.peso, paciente.nome, paciente.nomeAcesso, paciente.email, paciente.telefone, paciente.imagem);
            }
        } else {
            return undefined;
        }
    }
};