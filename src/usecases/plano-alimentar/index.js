import {
    planoAlimentarDb
} from "../../data-access/index.js";

import makeGetPlanoAlimentar from "./getPlanoAlimentar.js";
import makePostPlanoAlimentar from "./postPlanoAlimentar.js";

const getPlanoAlimentar = makeGetPlanoAlimentar(planoAlimentarDb);
const postPlanoAlimentar = makePostPlanoAlimentar(planoAlimentarDb);

const planoAlimentarService = Object.freeze({
    getPlanoAlimentar,
    postPlanoAlimentar
});

export default planoAlimentarService;

export {
    getPlanoAlimentar,
    postPlanoAlimentar
};