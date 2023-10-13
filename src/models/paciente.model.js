class Paciente {
    constructor(
        id,
        codigoAcesso,
        dataNascimento,
        dataCadastro,
        dataAgendamento,
        horaAgendamento,
        altura,
        peso,
        nome,
        nomeAcesso,
        email,
        telefone,
        imagem
    ) {
        this.id = id;
        this.codigoAcesso = codigoAcesso;
        this.altura = altura;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = dataCadastro;
        this.dataAgendamento = dataAgendamento;
        this.horaAgendamento = horaAgendamento;
        this.peso = peso;
        this.nome = nome;
        this.nomeAcesso = nomeAcesso;
        this.imagem = imagem;
        this.email = email;
        this.telefone = telefone;
    }

    static selectListaPacientes(idUsuario) {
        return `SELECT imagem, nome, idPaciente FROM pacientes WHERE usuarios_id = ${idUsuario};`;
    }

    static selectDetalhesPaciente(idPaciente, idUsuario) {
        return `SELECT p.codigoAcesso, p.dataNascimento, p.altura, p.peso, p.nome, p.nomeAcesso, p.email, p.telefone, p.imagem, p.dataCadastro, a.horaAgendamento, a.dataAgendamento
            FROM pacientes p JOIN agendamentos a ON p.usuarios_id = a.usuarios_id AND p.idPaciente = a.pacientes_idPaciente
            WHERE p.usuarios_id = ${idUsuario} AND p.idPaciente = ${idPaciente};`;
    }

    static insertPaciente(idUsuario, paciente, dataCadastro) {
        return `INSERT INTO pacientes (\`dataNascimento\`, \`altura\`, \`peso\`, \`nome\`, \`nomeAcesso\`, \`email\`, \`telefone\`, \`usuarios_id\`, \`dataCadastro\`) VALUES ('${paciente.dataNascimento}', ${paciente.altura}, ${paciente.peso}, '${paciente.nome}', '${paciente.nomeAcesso}', '${paciente.email}', ${paciente.telefone}, ${idUsuario}, '${dataCadastro}');`;
    }

    static updatePaciente(idUsuario, paciente) {
        return `UPDATE pacientes SET dataNascimento = '${paciente.dataNascimento}', altura = ${paciente.altura}, peso = ${paciente.peso}, nome = '${paciente.nome}', email = '${paciente.email}', telefone = ${paciente.telefone} WHERE idPaciente = ${paciente.id} AND usuarios_id = ${idUsuario};`;
    }

    static updateCodigoAcesso(idPaciente, idUsuario, codigo) {
        return `UPDATE pacientes SET codigoAcesso = ${codigo} WHERE idPaciente = ${idPaciente} AND usuarios_id = ${idUsuario};`;
    }

    static updateImagem(idPaciente, idUsuario, imagem) {
        return `UPDATE pacientes SET imagem = '${imagem}' WHERE idPaciente = ${idPaciente} AND usuarios_id = ${idUsuario};`;
    }
};

export default Paciente;