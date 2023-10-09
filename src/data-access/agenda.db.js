import mysql from 'mysql2/promise';

export default function makeAgendaDb({Agenda}) {
    async function selectAgenda(idNutricionista, dataAgendamento) {
        const db = mysql.createPool(process.env.CONN);
        const query = Agenda.selectAgenda(idNutricionista, dataAgendamento);
        const response = await db.query(query);
        if (response[0]) {
            let agenda = response[0].map((el) => {
                return new Agenda(el.nome, el.imagem, el.horaAgendamento);
            });
            return agenda;
        } else {
            return undefined;
        }
    }

    return Object.freeze({
        selectAgenda
    });
}
