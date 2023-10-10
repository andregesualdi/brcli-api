import {
    getAvaliacao,
    postAvaliacao
} from "../../usecases/avaliacao/index.js";

export default Object.freeze({
    getAvaliacao: (httpRequest) => getAvaliacao(httpRequest),
    postAvaliacao: (httpRequest) => postAvaliacao(httpRequest)
});
