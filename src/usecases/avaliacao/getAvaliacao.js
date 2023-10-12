export default function makeGetAvaliacao(db) {
    return async function getAvaliacao({headers}) {
        return db.selectAvaliacao(headers['codigo-paciente']);
    }
};