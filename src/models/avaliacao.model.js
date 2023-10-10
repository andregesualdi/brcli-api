class Avaliacao {
    constructor(
        arquivo,
        nomeArquivo
    ) {
        this.arquivo = arquivo;
        this.nomeArquivo = nomeArquivo
    }

    static selectAvaliacao = function(idPaciente) {
        return `SELECT arquivo, nomeArquivo FROM broccoli001.avaliacao WHERE pacientes_idPaciente = ${idPaciente};`
    }

    static findAvaliacao = function(idPaciente) {
        return `SELECT idAvaliacao FROM broccoli001.avaliacao WHERE pacientes_idPaciente = ${idPaciente};`
    }

    static updateAvaliacao = function(id, avaliacao) {
        return `UPDATE avaliacao SET arquivo = '${avaliacao.arquivo}', nomeArquivo = '${avaliacao.nomeArquivo}' WHERE idavaliacao = ${id}`;
    }

    static insertAvaliacao = function(idPaciente, avaliacao) {
        return `INSERT INTO avaliacao (\`arquivo\`, \`nomeArquivo\`, \`pacientes_idPaciente\`) VALUES ('${avaliacao.arquivo}', '${avaliacao.nomeArquivo}', ${idPaciente});`
    }
}

export default Avaliacao;