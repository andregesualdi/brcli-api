export default function makePostPlanoAlimentar(db) {
    return async function cadastrarPlanoAlimentar({body, headers}) {
        const planoAlimentar = body;
        planoAlimentar.data = formatDate();
        if (planoAlimentar.id) {
            const response = await db.cadastrarPlanoAlimentar(headers['codigo-paciente'], planoAlimentar);
            if (response.responsePlano[0].affectedRows > 0 && allAreTrue(response.responseRefeicoes)) {
                return {
                    success: true
                }
            }
            throw Error('Erro ao se comunicar com o serviço');
        } else {
            const response = await db.cadastrarPlanoAlimentar(headers['codigo-paciente'], planoAlimentar);
            if (allAreTrue(response.responseRefeicoes)) {
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

    function allAreTrue(array) {
        return array.every(el => el === true);
    }
};