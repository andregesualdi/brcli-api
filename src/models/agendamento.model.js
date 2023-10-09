class Agendamento {
    constructor(
        data,
        hora
    ) {
        this.data = data;
        this.hora = hora;
    }

    static selectAgendamento = function(idPaciente) {
        return `SELECT dataAgendamento, horaAgendamento FROM agendamentos WHERE pacientes_idPaciente = ${idPaciente};`
    }

    static findAgendamento = function(idPaciente) {
        return `SELECT id FROM agendamentos WHERE pacientes_idPaciente = ${idPaciente};`
    }

    static updateAgendamento = function(id, agendamento) {
        return `UPDATE agendamentos SET dataAgendamento = '${agendamento.data}', horaAgendamento = '${agendamento.hora}' WHERE id = ${id};`
    }

    static insertAgendamento = function(idPaciente, idUsuario, agendamento) {
        return `INSERT INTO agendamentos (\`dataAgendamento\`, \`horaAgendamento\`, \`pacientes_idPaciente\`, \`pacientes_usuarios_id\`, \`usuarios_id\`) VALUES ('${agendamento.data}', '${agendamento.hora}', ${idPaciente}, ${idUsuario}, ${idUsuario});`
    }
};

export default Agendamento;