export default function makePostPacientes(db) {
    return async function cadastrarEditarPacientes({body, headers}) {
        const paciente = body;
        paciente.id = headers['codigo-paciente'];
        const data = formatDate();
        const response = await db.cadastrarEditarPaciente(headers['codigo-usuario'], paciente, data);
        if (response.affectedRows && response.affectedRows == 1) {
            return {
                success: true
            }
        }
        
        throw Error('Erro ao se comunicar com o serviço');
    }

    function formatDate(date = new Date()) {
        const year = date.toLocaleString('default', {year: 'numeric'});
        const month = date.toLocaleString('default', {
          month: '2-digit',
        });
        const day = date.toLocaleString('default', {day: '2-digit'});
      
        return [year, month, day].join('-');
    }
};