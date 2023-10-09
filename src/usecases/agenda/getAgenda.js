export default function makeGetAgenda(db) {
    return async function getAgenda({headers}) {
        return db.selectAgenda(headers['codigo-usuario'], headers['data']);
    }
};