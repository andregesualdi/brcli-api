class PacienteMobile {
    constructor(
        nome,
        nomeAcesso,
        altura,
        email,
        imagem,
        nutricionista
    ) {
        this.nome = nome;
        this.nomeAcesso = nomeAcesso;
        this.altura = altura;
        this.email = email;
        this.imagem = imagem;
        this.nutricionista = nutricionista
    }

    static selectPacienteNutricionista(idPaciente) {
        return `SELECT p.nome, p.nomeAcesso, p.altura, p.email, p.imagem, n.nome as nomeNutricionista, n.telefone, n.endereco FROM pacientes p JOIN usuarios n ON p.usuarios_id = n.id WHERE p.idPaciente = ${idPaciente};`
    }
}

export default PacienteMobile;