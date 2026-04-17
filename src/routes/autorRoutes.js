const express = require('express');
const router = express.Router();

 const{
    getAllAutores,
    createAutor,
    deleteAutor
} = require('../controllers/autorController');

//rutas para la gestion de autores
router.get('/', getAllAutores);
router.post('/', createAutor);
router.delete('/:id', deleteAutor);

module.exports = router;


