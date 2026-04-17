const db = require('../config/db');

const Prestamo = {
    findAll: async () => {
        const [rows] = await db.query(`
            SELECT p.*, u.nombre, l.titulo
            FROM prestamo p
            JOIN usuario u ON p.usuario_id = u.id
            JOIN libro l ON p.libro_id = l.id
        `);
        return rows;
    },

    createPrestamo: async ({usuario_id, libro_id, fecha_prestamo, fecha_devolucion_prevista, fecha_devolucion_real}) => {
        const [result] = await db.query(
            'INSERT INTO prestamo (usuario_id, libro_id, fecha_prestamo, fecha_devolucion_prevista, fecha_devolucion_real) VALUES (?, ?, ?, ?, ?)',
            [usuario_id, libro_id, fecha_prestamo, fecha_devolucion_prevista, fecha_devolucion_real]
        );

        return { id: result.insertId, message: 'Prestamo creado' };
    }
};

module.exports = Prestamo;