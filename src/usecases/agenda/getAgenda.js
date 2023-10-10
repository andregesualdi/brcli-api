import { Agenda } from "../../models/index.js";

export default function makeGetAgenda(db) {
    return async function getAgenda({headers}) {
        const response = await db.selectAgenda(headers['codigo-usuario'], headers['data']);
        if (response[0]) {
            let agenda = response[0].map((el) => {
                return new Agenda(el.nome, el.imagem, el.horaAgendamento);
            });
            return agenda;
        } else {
            return undefined;
        }
    }
};