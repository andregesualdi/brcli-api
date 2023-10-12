class Refeicao {
    constructor(
        tipo,
        horario,
        id,
        alimentos
    ) {
        this.tipo = tipo;
        this.id = id;
        this.horario = horario;
        this.alimentos = alimentos;
    }

    static selectRefeicao = function(idPaciente, idPlanoAlimentar) {
        return `SELECT tipo, horario, idRefeicao FROM refeicao WHERE planoAlimentar_idplanoAlimentar = ${idPlanoAlimentar} AND planoAlimentar_pacientes_idPaciente = ${idPaciente};`;
    }

    static insertRefeicao = function(refeicao, idPlanoAlimentar, idPaciente) {
        return `INSERT INTO refeicao (\`tipo\`, \`horario\`, \`planoAlimentar_idplanoAlimentar\`, \`planoAlimentar_pacientes_idPaciente\`) VALUES ('${refeicao.tipo}', '${refeicao.horario}', ${idPlanoAlimentar}, ${idPaciente});`;
    }

    static updateRefeicao = function(refeicao, idPlanoAlimentar, idPaciente) {
        return `UPDATE refeicao SET horario = '${refeicao.horario}' WHERE planoAlimentar_idplanoAlimentar = ${idPlanoAlimentar} AND planoAlimentar_pacientes_idPaciente = ${idPaciente} AND idRefeicao = ${refeicao.id};`;
    }

    static refeicoes = [
        "cafe",
        "lanchemanha",
        "almoco",
        "lanchetarde",
        "jantar",
        "ceia"
    ];
}

export default Refeicao;