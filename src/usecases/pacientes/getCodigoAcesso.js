import { Codigo } from "../../models/index.js";

export default function makeGetCodigoAcesso(db) {
    return async function getCodigoAcesso({headers}) {
        const codigo = await gerarCodigoAcesso();        
        const response = await db.cadastrarCodigoAcesso(headers['codigo-paciente'], headers['codigo-usuario'], codigo);
        if (response[0].affectedRows && response[0].affectedRows > 0) {
            return new Codigo(codigo);
        }
        throw Error('Erro ao gerar código de acesso');
    }

    async function gerarCodigoAcesso() {
        let codigo = Math.floor(Math.random() * 10000000);
        const idPaciente = await db.checarCodigo(codigo);
        if (idPaciente[0][0] && idPaciente[0][0].idPaciente) {
            gerarCodigoAcesso();
        } else {
            return codigo;
        }
    }
};