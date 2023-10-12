import mysql from 'mysql2/promise';

export default function makeMetasDb({Meta, PlanoMetas}) {
    async function buscarPlanoMetas(idPaciente) {
        const db = mysql.createPool(process.env.CONN);
        const query = PlanoMetas.selectPlanoMetas(idPaciente);
        return await db.query(query);
    }

    async function buscarMetas(idPaciente, idPlanoMetas) {
        const db = mysql.createPool(process.env.CONN);
        const query = Meta.selectMeta(idPaciente, idPlanoMetas);
        const response = await db.query(query);
        return response;
    }

    async function cadastrarPlanoMetas(idPaciente, planoMetas) {
        const db = mysql.createPool({multipleStatements: true, uri: process.env.CONN});
        if (planoMetas.id) {
            const queryUpdatePlano = PlanoMetas.updatePlanoMetas(planoMetas.data, planoMetas.id, idPaciente);
            const queryDeleteMetas = Meta.deleteMeta(idPaciente, planoMetas.id);
            let queryInsertMetas = Meta.insertMetaPrefix();
            planoMetas.metas.forEach(meta => {
                queryInsertMetas = queryInsertMetas.concat(Meta.insertMetaSufix(idPaciente, planoMetas.id, meta));
            });
            queryInsertMetas = queryInsertMetas.substring(0, queryInsertMetas.length - 2).concat(";");
            const longQuery = queryUpdatePlano.concat(queryDeleteMetas, queryInsertMetas);
            const dbInsert = await db.query(longQuery, [1, 2, 3]);
            const response = [dbInsert[0][0].affectedRows, dbInsert[0][2].affectedRows];
            return response;
        } else {
            const queryInsertPlano = PlanoMetas.insertPlanoMetas(planoMetas.data, idPaciente);
            const responseQuery = await db.query(queryInsertPlano);
            const idPlano = responseQuery[0].insertId;
            let queryInsertMetas = Meta.insertMetaPrefix();
            planoMetas.metas.forEach(meta => {
                queryInsertMetas = queryInsertMetas.concat(Meta.insertMetaSufix(idPaciente, idPlano, meta));
            });
            queryInsertMetas = queryInsertMetas.substring(0, queryInsertMetas.length - 2).concat(";");
            const response = await db.query(queryInsertMetas);
            return response[0];
        }
    }

    return Object.freeze({
        buscarPlanoMetas,
        buscarMetas,
        cadastrarPlanoMetas
    });
}
