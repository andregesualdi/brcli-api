import {
    getPlanoAlimentar,
    postPlanoAlimentar
} from "../../usecases/plano-alimentar/index.js";

export default Object.freeze({
    getPlanoAlimentar: (httpRequest) => getPlanoAlimentar(httpRequest),
    postPlanoAlimentar: (httpRequest) => postPlanoAlimentar(httpRequest)
});
