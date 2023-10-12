class PlanoAlimentar {
    constructor(
        id,
        data,
        refeicoes
    ) {
        this.data = data;
        this.id = id;
        this.refeicoes = refeicoes;
    }

    static selectPlanoAlimentar = function(idPaciente) {
        return `SELECT idplanoAlimentar, data FROM planoalimentar WHERE pacientes_idPaciente = ${idPaciente};`;
    }

    static insertPlanoAlimentar = function(data, idPaciente) {
        return `INSERT INTO planoalimentar (\`data\`, \`pacientes_idPaciente\`) VALUES ('${data}', '${idPaciente}');`;
    }

    static updatePlanoAlimentar = function(data, idPlanoAlimentar, idPaciente) {
        return `UPDATE planoalimentar SET data = '${data}' WHERE idplanoAlimentar = ${idPlanoAlimentar} AND pacientes_idPaciente = ${idPaciente};`;
    }
}

export default PlanoAlimentar;