import mysql from 'mysql2/promise';

export default function makeAgendaDb({Agenda}) {
    async function selectAgenda(idNutricionista, dataAgendamento) {
        const db = mysql.createPool(process.env.CONN);
        const query = Agenda.selectAgenda(idNutricionista, dataAgendamento);
        return await db.query(query);
    }

    return Object.freeze({
        selectAgenda
    });
}
