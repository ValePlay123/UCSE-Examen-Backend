const express = require('express');
const router = express.Router();
// Traemos el controlador
const trailersController = require('../controllers/trailerController');

// Obtener todos los trailers
router.get('/', trailersController.getTrailer);

// Filtrar trailers por género
router.get('/search/genero', trailersController.getTrailerByGenero);

// Buscar trailers por actor
router.get('/search/actor', trailersController.getTrailerByActor);

// Buscar trailers de series con más de X temporadas
router.get('/search/temporadas', trailersController.getTrailerByTemporadas);

// Agregar un nuevo trailer
router.post('/', trailersController.createTrailer);

// Eliminar un trailer
router.delete('/:id', trailersController.deleteTrailer);

module.exports = router;
