export default function makeUpdateImagemPaciente(db) {
    return async function atualizarImagem({body, headers}) {
        const imagem = body.imagem;
        const response = await db.cadastrarImagem(headers['codigo-paciente'], headers['codigo-usuario'], imagem);
        if (response[0].affectedRows && response[0].affectedRows == 1) {
            return {
                success: true
            }
        }
        
        throw Error('Erro ao se comunicar com o serviço');
    }
};