import mysql from 'mysql2/promise';

export default function makePacientesDb({Paciente, Codigo}) {
    async function listarPacientes(idUsuario) {
        const db = mysql.createPool(process.env.CONN);
        const query = Paciente.selectListaPacientes(idUsuario);
        return await db.query(query);
    }

    async function detalharPaciente(idPaciente, idUsuario) {
        const db = mysql.createPool(process.env.CONN);
        const query = Paciente.selectDetalhesPaciente(idPaciente, idUsuario);
        return await db.query(query);
    }

    async function cadastrarEditarPaciente(idUsuario, paciente) {
        const db = mysql.createPool(process.env.CONN);
        let query;
        if (paciente.id) {
            query = Paciente.updatePaciente(idUsuario, paciente);
        } else {
            query = Paciente.insertPaciente(idUsuario, paciente);
        }
        const response = await db.query(query);
        return response[0];
    }

    async function checarCodigo(codigo) {
        const db = mysql.createPool(process.env.CONN);
        const query = Codigo.selectCodigo(codigo);
        return await db.query(query);
    }

    async function cadastrarCodigoAcesso(idPaciente, idUsuario, codigo) {
        const db = mysql.createPool(process.env.CONN);
        const query = Paciente.updateCodigoAcesso(idPaciente, idUsuario, codigo);
        console.log(query);
        return await db.query(query);
    }

    async function cadastrarImagem(idPaciente, idUsuario, imagem) {
        const db = mysql.createPool(process.env.CONN);
        const query = Paciente.updateImagem(idPaciente, idUsuario, imagem);
        return await db.query(query);
    }

    return Object.freeze({
        listarPacientes,
        detalharPaciente,
        cadastrarEditarPaciente,
        cadastrarCodigoAcesso,
        cadastrarImagem,
        checarCodigo
    });
}
