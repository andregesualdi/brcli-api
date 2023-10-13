import { PacienteMobile, NutricionistaMobile } from "../../models/index.js";

export default function makeGetPacienteMobile(db) {
    return async function getPacienteMobile({headers}) {
        const response = await db.recuperarDadosPacienteNutricionista(headers['codigo-paciente']);
        if (response[0] && response[0].length > 0) {
            const res = response[0][0];
            const nutricionista = new NutricionistaMobile(res.nome, res.endereco, res.telefone);
            const paciente = new PacienteMobile(res.nome, res.nomeAcesso, res.altura, res.email, res.imagem, nutricionista);
            return paciente;            
        } else {
            return undefined;
        }
    }
};
