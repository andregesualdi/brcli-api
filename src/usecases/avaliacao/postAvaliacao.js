export default function makePostAvaliacao(db) {
    return async function salvarAvaliacao({body, headers}) {
        const response = await db.salvarAvaliacao(headers['codigo-paciente'], body);
        if (response.affectedRows && response.affectedRows == 1) {
            return {
                success: true
            }
        }
        
        throw Error('Erro ao se comunicar com o serviço');
    }
};