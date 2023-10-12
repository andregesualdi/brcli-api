import { agendaDb } from "../../data-access/index.js";
import makeGetAgenda from "./getAgenda.js";

const getAgenda = makeGetAgenda(agendaDb);

const agendaService = Object.freeze({
    getAgenda
});

export default agendaService;

export {
    getAgenda
};