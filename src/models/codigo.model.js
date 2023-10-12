class Codigo {
    constructor(
        codigo
    ) {
        this.codigo = codigo;
    }

    static selectCodigo(codigo) {
        return `SELECT idPaciente FROM pacientes WHERE codigoAcesso = ${codigo}`;
    }
}

export default Codigo;