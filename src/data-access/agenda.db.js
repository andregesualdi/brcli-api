import mysql from 'mysql2/promise';
import Configuration from '../config.js';

export default function makeAgendaDb({Agenda}) {
    async function selectAgenda(idNutricionista, dataAgendamento) {
        const db = mysql.createPool(Configuration.conn);
        const query = Agenda.selectAgenda(idNutricionista, dataAgendamento);
        return await db.query(query);
    }

    return Object.freeze({
        selectAgenda
    });
}
