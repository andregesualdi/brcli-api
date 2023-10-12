import { PlanoMetas, Meta } from "../../models/index.js";

export default function makeGetMetas(db) {
    return async function getPlanoMetas({headers}) {
        const idPaciente = headers['codigo-paciente'];
        const responsePlano = await db.buscarPlanoMetas(idPaciente);
        if (responsePlano[0][0] && responsePlano[0][0].idplanoMetas) {
            const idPlano = responsePlano[0][0].idplanoMetas;
            const responseMetas = await db.buscarMetas(idPaciente, idPlano);
            let metas = new Array();
            responseMetas[0].forEach(el => {
                metas.push(new Meta(el.descricaoMeta, Boolean(el.atingida)));
            });
            return new PlanoMetas(idPlano, responsePlano[0][0].data, metas);
        } else {
            return undefined;
        }
    }
};