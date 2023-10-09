import {
    getAgendamento,
    postAgendamento
} from "../../usecases/agendamento/index.js";

export default Object.freeze({
    getAgendamento: (httpRequest) => getAgendamento(httpRequest),
    postAgendamento: (httpRequest) => postAgendamento(httpRequest)
});
