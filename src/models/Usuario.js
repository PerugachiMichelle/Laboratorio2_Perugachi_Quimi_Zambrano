const db = require('../config/db');

const Usuario = {
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM usuario');
        return rows;
    },

    createUsuario: async ({nombre, apellido, correo, tipo_usuario}) => {
        const [result] = await db.query(
            'INSERT INTO usuario (nombre, apellido, correo, tipo_usuario) VALUES (?, ?, ?, ?)',
            [nombre, apellido, correo, tipo_usuario]
        );
        return { id: result.insertId, nombre, apellido, correo, tipo_usuario };
    },

    updateUsuario: async (id, {nombre, apellido, correo, tipo_usuario}) => {
        await db.query(
            'UPDATE usuario SET nombre = ?, apellido = ?, correo = ?, tipo_usuario = ? WHERE id = ?',
            [nombre, apellido, correo, tipo_usuario, id]
        );
        return { message: 'Usuario actualizado' };
    }
};

module.exports = Usuario;