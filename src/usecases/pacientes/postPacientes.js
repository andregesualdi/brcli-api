export default function makePostPacientes(db) {
    return async function cadastrarEditarPacientes({body, headers}) {
        const paciente = body;
        paciente.id = headers['codigo-paciente'];
        const response = await db.cadastrarEditarPaciente(headers['codigo-usuario'], paciente);
        if (response.affectedRows && response.affectedRows == 1) {
            return {
                success: true
            }
        }
        
        throw Error('Erro ao se comunicar com o serviço');
    }
};