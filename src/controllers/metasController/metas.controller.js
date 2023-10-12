import {
    getMetas, postMetas
} from "../../usecases/metas/index.js";

export default Object.freeze({
    getMetas: (httpRequest) => getMetas(httpRequest),
    postMetas: (httpRequest) => postMetas(httpRequest)
});
