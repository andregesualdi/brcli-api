import {
    agendamentoDb
} from "../../data-access/index.js";

import makeGetAgendamento from "./getAgendamento.js";

import makePostAgendamento from "./postAgendamento.js";

const getAgendamento = makeGetAgendamento(agendamentoDb);
const postAgendamento = makePostAgendamento(agendamentoDb);

const agendamentoService = Object.freeze({
    getAgendamento,
    postAgendamento
});

export default agendamentoService;

export {
    getAgendamento,
    postAgendamento
};