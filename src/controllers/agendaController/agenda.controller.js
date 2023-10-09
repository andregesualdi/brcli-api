import { getAgenda } from "../../usecases/agenda/index.js";

export default Object.freeze({
    getAgenda: (httpRequest) => getAgenda(httpRequest)
});
