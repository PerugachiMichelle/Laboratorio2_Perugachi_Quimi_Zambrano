const db = require('../config/db');

const Libro = {
    findAll: async () => {
       const [rows] = await db.query(`
            SELECT l.*, a.nombre, a.apellido
            FROM libro l
            JOIN autor a ON l.autor_id = a.id
            `);
        return rows;
    },

    createLibro: async ({titulo, isbn, anio_publicacion, edicion, autor_id}) => {
        const [result] = await db.query(
            'INSERT INTO libro (titulo, isbn, anio_publicacion, edicion, autor_id) VALUES (?, ?, ?, ?, ?)',
            [titulo, isbn, anio_publicacion, edicion, autor_id]
        );
        return { id: result.insertId, titulo, isbn, anio_publicacion, edicion, autor_id , message: 'Libro creado exitosamente'};
    },

    //eliminar libro por id
    deleteLibro: async (id) => {
        await db.query('DELETE FROM libro WHERE id = ?', [id]);
        return { message: 'Libro eliminado exitosamente' };
    },

    // actualizar libro
    updateLibro: async (id, {titulo, isbn, anio_publicacion, edicion, autor_id}) => {
        await db.query(
            'UPDATE libro SET titulo = ?, isbn = ?, anio_publicacion = ?, edicion = ?, autor_id = ? WHERE id = ?',
            [titulo, isbn, anio_publicacion, edicion, autor_id, id]
        );
        return { message: 'Libro actualizado correctamente' };
    },

    // buscar libro por id
    findById: async (id) => {
        const [rows] = await db.query(`
            SELECT l.*, a.nombre, a.apellido
            FROM libro l
            JOIN autor a ON l.autor_id = a.id
            WHERE l.id = ?
        `, [id]);
        return rows[0]; // Devuelve el primer libro encontrado o undefined si no existe
    }

}

module.exports = Libro;