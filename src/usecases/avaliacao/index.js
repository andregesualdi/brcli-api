import {
    avaliacaoDb
} from "../../data-access/index.js";

import makeGetAvaliacao from "./getAvaliacao.js";

import makePostAvaliacao from "./postAvaliacao.js";

const getAvaliacao = makeGetAvaliacao(avaliacaoDb);

const postAvaliacao = makePostAvaliacao(avaliacaoDb);

const avaliacaoService = Object.freeze({
    getAvaliacao,
    postAvaliacao
});

export default avaliacaoService;

export {
    getAvaliacao,
    postAvaliacao
};