import mysql from 'mysql2/promise';

export default function makeAgendamentoDb({Agendamento}) {
    async function selectUm(idPaciente) {
        const db = mysql.createPool(process.env.CONN);
        const query = Agendamento.selectAgendamento(idPaciente);
        const response = await db.query(query);
        if (response[0][0]) {
            return new Agendamento(response[0][0].dataAgendamento, response[0][0].horaAgendamento);
        } else {
            return undefined;
        }
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
            console.log(queryInsert);
            const responseInsert = await db.query(queryInsert);
            return responseInsert[0];
        }
    }

    return Object.freeze({
        selectUm,
        agendar
    });
}
