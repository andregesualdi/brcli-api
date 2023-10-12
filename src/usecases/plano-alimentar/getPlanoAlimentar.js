import { PlanoAlimentar, Refeicao, Alimento } from "../../models/index.js";

export default function makeGetPlanoAlimentar(db) {
    return async function getPlanoAlimentar({headers}) {
        const idPaciente = headers['codigo-paciente'];
        const responsePlano = await db.buscarPlanoAlimentar(idPaciente);
        if (responsePlano[0][0] && responsePlano[0][0].idplanoAlimentar) {
            const idPlano = responsePlano[0][0].idplanoAlimentar;
            let planoAlimentar = new PlanoAlimentar(idPlano, responsePlano[0][0].data, new Array);
            const responseRefeicoes = await db.buscarRefeicoes(idPaciente, idPlano);
            responseRefeicoes[0].forEach((el) => {
                planoAlimentar.refeicoes.push(new Refeicao(el.tipo, el.horario, el.idRefeicao, null));
            });
            for (let refeicao of planoAlimentar.refeicoes) {
                const responseAlimentos = await db.buscarAlimentos(refeicao.id);
                refeicao.alimentos = responseAlimentos[0];
            }
            return planoAlimentar;
        } else {
            const refeicoes = new Array;
            for (let refeicao of Refeicao.refeicoes) {
                refeicoes.push(new Refeicao(refeicao, "", null, new Array));
            }
            return new PlanoAlimentar(null, "", refeicoes);
        }
    }
};