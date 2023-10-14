import mysql from 'mysql2/promise';
import Configuration from '../config.js';

export default function makePacientesDb({Paciente, PacienteMobile, Codigo}) {
    async function listarPacientes(idUsuario) {
        const db = mysql.createPool(Configuration.conn);
        const query = Paciente.selectListaPacientes(idUsuario);
        return await db.query(query);
    }

    async function detalharPaciente(idPaciente, idUsuario) {
        const db = mysql.createPool(Configuration.conn);
        const query = Paciente.selectDetalhesPaciente(idPaciente, idUsuario);
        return await db.query(query);
    }

    async function recuperarDadosPacienteNutricionista(idPaciente) {
        const db = mysql.createPool(Configuration.conn);
        const query = PacienteMobile.selectPacienteNutricionista(idPaciente);
        return await db.query(query);
    }

    async function cadastrarEditarPaciente(idUsuario, paciente, data) {
        const db = mysql.createPool(Configuration.conn);
        let query;
        if (paciente.id) {
            query = Paciente.updatePaciente(idUsuario, paciente);
        } else {
            query = Paciente.insertPaciente(idUsuario, paciente, data);
        }
        const response = await db.query(query);
        return response[0];
    }

    async function checarCodigo(codigo) {
        const db = mysql.createPool(Configuration.conn);
        const query = Codigo.selectCodigo(codigo);
        return await db.query(query);
    }

    async function cadastrarCodigoAcesso(idPaciente, idUsuario, codigo) {
        const db = mysql.createPool(Configuration.conn);
        const query = Paciente.updateCodigoAcesso(idPaciente, idUsuario, codigo);
        return await db.query(query);
    }

    async function cadastrarImagem(idPaciente, imagem) {
        const db = mysql.createPool(Configuration.conn);
        const query = Paciente.updateImagem(idPaciente, imagem);
        return await db.query(query);
    }

    return Object.freeze({
        listarPacientes,
        detalharPaciente,
        cadastrarEditarPaciente,
        cadastrarCodigoAcesso,
        cadastrarImagem,
        checarCodigo,
        recuperarDadosPacienteNutricionista
    });
}
