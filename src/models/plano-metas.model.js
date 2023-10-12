class PlanoMetas {
    constructor(
        id,
        data,
        metas
    ) {
        this.data = data;
        this.id = id;
        this.metas = metas;
    }

    static selectPlanoMetas = function(idPaciente) {
        return `SELECT idplanoMetas, data FROM planometas WHERE pacientes_idPaciente = ${idPaciente};`;
    }

    static insertPlanoMetas = function(data, idPaciente) {
        return `INSERT INTO planometas (\`data\`, \`pacientes_idPaciente\`) VALUES ('${data}', '${idPaciente}');`;
    }

    static updatePlanoMetas = function(data, idPlanoMetas, idPaciente) {
        return `UPDATE planometas SET data = '${data}' WHERE idplanoMetas = ${idPlanoMetas} AND pacientes_idPaciente = ${idPaciente};`;
    }
}

export default PlanoMetas;