import * as models from "../models/index.js";

import makeAgendamentoDb from "./agendamento.db.js";
import makeAgendaDb from "./agenda.db.js";
import makeAvaliacaoDb from "./avaliacao.db.js";
import makeMetasDb from "./metas.db.js";
import makePlanoAlimentarDb from "./plano-alimentar.db.js";

const agendamentoDb = makeAgendamentoDb(models);
const agendaDb = makeAgendaDb(models);
const avaliacaoDb = makeAvaliacaoDb(models);
const metasDb = makeMetasDb(models);
const planoAlimentarDb = makePlanoAlimentarDb(models);

export {
    agendamentoDb,
    agendaDb,
    avaliacaoDb,
    metasDb,
    planoAlimentarDb
};
