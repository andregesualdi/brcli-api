import * as models from "../models/index.js";

import makeAgendamentoDb from "./agendamento.db.js";
import makeAgendaDb from "./agenda.db.js";

const agendamentoDb = makeAgendamentoDb(models);
const agendaDb = makeAgendaDb(models);

export {
    agendamentoDb,
    agendaDb
};
