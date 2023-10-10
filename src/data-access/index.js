import * as models from "../models/index.js";

import makeAgendamentoDb from "./agendamento.db.js";
import makeAgendaDb from "./agenda.db.js";
import makeAvaliacaoDb from "./avaliacao.db.js";

const agendamentoDb = makeAgendamentoDb(models);
const agendaDb = makeAgendaDb(models);
const avaliacaoDb = makeAvaliacaoDb(models);

export {
    agendamentoDb,
    agendaDb,
    avaliacaoDb
};
