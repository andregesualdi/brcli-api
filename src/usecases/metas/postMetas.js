export default function makePostMetas(db) {
    return async function cadastrarMetas({body, headers}) {
        const planoMetas = body;
        planoMetas.data = formatDate();
        if (planoMetas.id) {
            const response = await db.cadastrarPlanoMetas(headers['codigo-paciente'], planoMetas);
            if (response[0] === 1 && response[1]) {
                return {
                    success: true
                }
            }
            throw Error('Erro ao se comunicar com o serviço');
        } else {
            const response = await db.cadastrarPlanoMetas(headers['codigo-paciente'], planoMetas);
            if (response.affectedRows && response.affectedRows === planoMetas.metas.length) {
                return {
                    success: true
                }
            }
            throw Error('Erro ao se comunicar com o serviço');
        }
        
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