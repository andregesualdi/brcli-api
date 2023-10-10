import mysql from 'mysql2/promise';

export default function makeAgendamentoDb({Agendamento}) {
    async function selectUm(idPaciente) {
        const db = mysql.createPool(process.env.CONN);
        const query = Agendamento.selectAgendamento(idPaciente);
        return await db.query(query);
    }

    async function agendar(idPaciente, idUsuario, agendamento) {
        const db = mysql.createPool(process.env.CONN);
        const query = Agendamento.findAgendamento(idPaciente);
        const responseFind = await db.query(query);
        if (responseFind[0].length > 0) {
            const idAgendamento = responseFind[0][0].id;
            const queryUpdate = Agendamento.updateAgendamento(idAgendamento, agendamento);
            const responseUpdate = await db.query(queryUpdate);
            return responseUpdate[0];
        } else {
            const queryInsert = Agendamento.insertAgendamento(idPaciente, idUsuario, agendamento);
            const responseInsert = await db.query(queryInsert);
            return responseInsert[0];
        }
    }

    return Object.freeze({
        selectUm,
        agendar
    });
}
