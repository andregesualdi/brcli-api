import {
    metasDb
} from "../../data-access/index.js";

import makeGetMetas from "./getMetas.js";
import makePostMetas from "./postMetas.js";

const getMetas = makeGetMetas(metasDb);
const postMetas = makePostMetas(metasDb);

const metasService = Object.freeze({
    getMetas,
    postMetas
});

export default metasService;

export {
    getMetas,
    postMetas
};