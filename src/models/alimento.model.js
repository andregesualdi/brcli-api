class Alimento {
    constructor(
        quantidade,
        medida,
        descricao
    ) {
        this.quantidade = quantidade;
        this.medida = medida;
        this.descricao = descricao;
    }

    static selectAlimento = function(idRefeicao) {
        return `SELECT quantidade, medida, descricao FROM alimento WHERE refeicao_idRefeicao = ${idRefeicao};`
    }

    static deleteAlimento = function(idRefeicao) {
        return `DELETE FROM alimento WHERE refeicao_idRefeicao = ${idRefeicao};`;
    }

    static insertAlimentoPrefix = function() {
        return `INSERT INTO alimento (\`quantidade\`, \`medida\`, \`descricao\`, \`refeicao_idRefeicao\`) VALUES `;
    }

    static insertAlimentoSufix = function(alimento, idRefeicao) {
        return `(${alimento.quantidade}, '${alimento.medida}', '${alimento.descricao}', ${idRefeicao}), `;
    }
};

export default Alimento;
