class Paciente {
    constructor(
        id,
        codigoAcesso,
        dataNascimento,
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
        return `SELECT codigoAcesso, dataNascimento, altura, peso, nome, nomeAcesso, email, telefone, imagem FROM pacientes WHERE usuarios_id = ${idUsuario} AND idPaciente = ${idPaciente};`;
    }

    static insertPaciente(idUsuario, paciente) {
        return `INSERT INTO pacientes (\`dataNascimento\`, \`altura\`, \`peso\`, \`nome\`, \`nomeAcesso\`, \`email\`, \`telefone\`, \`usuarios_id\`) VALUES ('${paciente.dataNascimento}', ${paciente.altura}, ${paciente.peso}, '${paciente.nome}', '${paciente.nomeAcesso}', '${paciente.email}', ${paciente.telefone}, ${idUsuario});`;
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