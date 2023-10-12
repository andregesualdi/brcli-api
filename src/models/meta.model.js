class Meta {
    constructor(
        descricaoMeta,
        atingida
    ) {
        this.descricaoMeta = descricaoMeta;
        this.atingida = atingida;
    }

    static selectMeta = function(idPaciente, idPlanoMetas) {
        return `SELECT descricaoMeta, atingida FROM meta WHERE planoMetas_pacientes_idPaciente = ${idPaciente} AND planoMetas_idplanoMetas = ${idPlanoMetas};`
    }

    static deleteMeta = function(idPaciente, idPlanoMetas) {
        return `DELETE FROM meta WHERE planoMetas_idplanoMetas = ${idPlanoMetas} AND planoMetas_pacientes_idPaciente = ${idPaciente};`;
    }

    static insertMetaPrefix = function() {
        return `INSERT INTO meta (\`descricaoMeta\`, \`atingida\`, \`planoMetas_idplanoMetas\`, \`planoMetas_pacientes_idPaciente\`) VALUES `;
    }

    static insertMetaSufix = function(idPaciente, idPlanoMetas, meta) {
        return `('${meta.descricaoMeta}', ${meta.atingida}, ${idPlanoMetas}, ${idPaciente}), `;
    }
};

export default Meta;