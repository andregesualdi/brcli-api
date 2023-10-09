export default function makePostAgendamento(db) {
    return async function agendar({body, headers}) {
        const response = await db.agendar(headers['codigo-paciente'], headers['codigo-usuario'], body);
        if (response.affectedRows && response.affectedRows == 1) {
            return {
                success: true
            }
        }
        
        throw Error('Erro ao se comunicar com o serviço');
    }
};