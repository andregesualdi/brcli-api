import mysql from 'mysql2/promise';
import Configuration from '../config.js';

export default function makeAvaliacaoDb({Avaliacao}) {
    async function selectAvaliacao(idPaciente) {
        const db = mysql.createPool(Configuration.conn);
        const query = Avaliacao.selectAvaliacao(idPaciente);
        const response = await db.query(query);
        if (response[0][0]) {
            return new Avaliacao(response[0][0].arquivo, response[0][0].nomeArquivo);
        } else {
            return undefined;
        }
    }

    async function salvarAvaliacao(idPaciente, avaliacao) {
        const db = mysql.createPool(Configuration.conn);
        const query = Avaliacao.findAvaliacao(idPaciente);
        const responseFind = await db.query(query);
        if (responseFind[0].length > 0) {
            const idAvaliacao = responseFind[0][0].idAvaliacao;
            const queryUpdate = Avaliacao.updateAvaliacao(idAvaliacao, avaliacao);
            const responseUpdate = await db.query(queryUpdate);
            return responseUpdate[0];
        } else {
            const queryInsert = Avaliacao.insertAvaliacao(idPaciente, avaliacao);
            const responseInsert = await db.query(queryInsert);
            return responseInsert[0];
        }
    }

    return Object.freeze({
        selectAvaliacao,
        salvarAvaliacao
    });
}
