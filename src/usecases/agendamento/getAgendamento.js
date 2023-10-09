export default function makeGetAgendamento(db) {
    return async function getAgendamento({headers}) {
        return db.selectUm(headers['codigo-paciente']);
    }
};