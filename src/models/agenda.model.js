class Agenda {
    constructor(
        nome,
        imagem,
        hora
    ) {
        this.nome = nome;
        this.imagem = imagem;
        this.hora = hora;
    }

    static selectAgenda = function(id, data) {
        return `SELECT p.nome, p.imagem, a.horaAgendamento FROM pacientes p
        JOIN agendamentos a ON p.usuarios_id = a.usuarios_id AND p.idPaciente = a.pacientes_idPaciente
        WHERE p.usuarios_id = ${id} AND a.dataAgendamento = '${data}';`
    }
};

export default Agenda;