import mysql from 'mysql2/promise';
import Configuration from '../config.js';

export default function makeMetasDb({Meta, PlanoMetas}) {
    async function buscarPlanoMetas(idPaciente) {
        const db = mysql.createPool(Configuration.conn);
        const query = PlanoMetas.selectPlanoMetas(idPaciente);
        return await db.query(query);
    }

    async function buscarMetas(idPaciente, idPlanoMetas) {
        const db = mysql.createPool(Configuration.conn);
        const query = Meta.selectMeta(idPaciente, idPlanoMetas);
        return await db.query(query);
    }

    async function cadastrarPlanoMetas(idPaciente, planoMetas) {
        const db = mysql.createPool({multipleStatements: true, uri: Configuration.conn});
        if (planoMetas.id) {
            const queryUpdatePlano = PlanoMetas.updatePlanoMetas(planoMetas.data, planoMetas.id, idPaciente);
            const queryDeleteMetas = Meta.deleteMeta(idPaciente, planoMetas.id);
            let queryInsertMetas = Meta.insertMetaPrefix();
            let response;
            if (planoMetas.metas.length > 0) {
                planoMetas.metas.forEach(meta => {
                    queryInsertMetas = queryInsertMetas.concat(Meta.insertMetaSufix(idPaciente, planoMetas.id, meta));
                });
                queryInsertMetas = queryInsertMetas.substring(0, queryInsertMetas.length - 2).concat(";");
                const longQuery = queryUpdatePlano.concat(queryDeleteMetas, queryInsertMetas);
                const dbInsert = await db.query(longQuery, [1, 2, 3]);
                response = [dbInsert[0][0].affectedRows, dbInsert[0][2].affectedRows];
            } else {
                const longQuery = queryUpdatePlano.concat(queryDeleteMetas);
                const dbInsert = await db.query(longQuery, [1, 2]);
                response = [dbInsert[0][0].affectedRows, dbInsert[0][1].affectedRows];
            }
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
