import { Agendamento } from "../../models/index.js";

export default function makeGetAgendamento(db) {
    return async function getAgendamento({headers}) {
        const response = await db.selectUm(headers['codigo-paciente']);
        if (response[0][0]) {
            return new Agendamento(response[0][0].dataAgendamento, response[0][0].horaAgendamento);
        } else {
            return undefined;
        }
    }
};