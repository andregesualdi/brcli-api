import mysql from 'mysql2/promise';

export default function makePlanoAlimentarDb({Alimento, PlanoAlimentar, Refeicao}) {
    async function buscarPlanoAlimentar(idPaciente) {
        const db = mysql.createPool(process.env.CONN);
        const query = PlanoAlimentar.selectPlanoAlimentar(idPaciente);
        return await db.query(query);
    }

    async function buscarRefeicoes(idPaciente, idPlanoAlimentar) {
        const db = mysql.createPool(process.env.CONN);
        const query = Refeicao.selectRefeicao(idPaciente, idPlanoAlimentar);
        return await db.query(query);
    }

    async function buscarAlimentos(idRefeicao) {
        const db = mysql.createPool(process.env.CONN);
        const query = Alimento.selectAlimento(idRefeicao);
        return await db.query(query);
    }

    async function cadastrarPlanoAlimentar(idPaciente, planoAlimentar) {
        const db = mysql.createPool({multipleStatements: true, uri: process.env.CONN});
        if (planoAlimentar.id) {
            const queryUpdatePlano = PlanoAlimentar.updatePlanoAlimentar(planoAlimentar.data, planoAlimentar.id, idPaciente);
            const responsePlano = await db.query(queryUpdatePlano);
            let responseRefeicoes = new Array;
            for (let refeicao of planoAlimentar.refeicoes) {
                const query = Refeicao.updateRefeicao(refeicao, planoAlimentar.id, idPaciente);
                const response = await db.query(query);
                let queryInsertAlimento = Alimento.insertAlimentoPrefix();
                const queryDeleteAlimento = Alimento.deleteAlimento(refeicao.id);
                refeicao.alimentos.forEach(al => {
                    queryInsertAlimento = queryInsertAlimento.concat(Alimento.insertAlimentoSufix(al, refeicao.id));
                });
                queryInsertAlimento = queryInsertAlimento.substring(0, queryInsertAlimento.length - 2).concat(";");
                const actualQuery = queryDeleteAlimento.concat(queryInsertAlimento);
                const dbInsert = await db.query(actualQuery, [1, 2]);
                responseRefeicoes.push(response[0].affectedRows > 0 && dbInsert[0][1].affectedRows > 0);
            }
            return {
                responsePlano,
                responseRefeicoes
            };
        } else {
            const queryInsertPlano = PlanoAlimentar.insertPlanoAlimentar(planoAlimentar.data, idPaciente);
            const responseQuery = await db.query(queryInsertPlano);
            const idPlano = responseQuery[0].insertId;
            let responseRefeicoes = new Array;
            for (let refeicao of planoAlimentar.refeicoes) {
                const queryInsertRefeicao = Refeicao.insertRefeicao(refeicao, idPlano, idPaciente);
                const response = await db.query(queryInsertRefeicao);
                const idRefeicao = response[0].insertId;
                let queryInsertAlimento = Alimento.insertAlimentoPrefix();
                if (refeicao.alimentos.length > 0) {
                    refeicao.alimentos.forEach(al => {
                        queryInsertAlimento = queryInsertAlimento.concat(Alimento.insertAlimentoSufix(al, idRefeicao));
                    });
                    queryInsertAlimento = queryInsertAlimento.substring(0, queryInsertAlimento.length - 2).concat(";");
                    const responseRefeicoes = await db.query(queryInsertAlimento);
                    responseRefeicoes.push(response[0].affectedRows > 0 && responseRefeicoes[0].affectedRows === refeicao.alimentos.length);
                } else {
                    responseRefeicoes.push(response[0].affectedRows > 0);
                }
            }
            return {
                responseRefeicoes
            }
        }
    }

    return Object.freeze({
        buscarPlanoAlimentar,
        buscarRefeicoes,
        buscarAlimentos,
        cadastrarPlanoAlimentar
    });
}
