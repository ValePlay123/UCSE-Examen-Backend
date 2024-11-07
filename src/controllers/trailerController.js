// Traemos el modelo de Movie
const trailer = require('../models/trailer')

const getTrailer = (req, res) => {
    const query = req.query || {};
    trailer.find(query)
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

// Filtrar trailers por género
const getTrailerByGenero = (req, res) => {
    const genre = req.query.genero;
    trailer.find({ genero: genre })
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}


// Buscar trailers por actor
const getTrailerByActor = (req, res) => {
    const actur = req.query.actor;
    trailer.find({ reparto: actur })
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

// Buscar trailers de series con más de X temporadas
const getTrailerByTemporadas = (req, res) => {
    const minSeasons = req.query.minTemporadas;
    trailer.find({ temporadas: { $gte: minSeasons } })
        .then(trailers => res.json(trailers))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
};

// Agregar un nuevo trailer
const createTrailer = (req, res) => {
    const newTrailer = new trailer(req.body);
    newTrailer.save()
        .then(trailer => res.status(201).json(trailer))
        .catch(error => res.status(400).json({ message: 'Error al agregar el trailer', error }));
};

// Eliminar un trailer
const deleteTrailer = (req, res) => {
    trailer.findByIdAndDelete(req.params.id)
        .then(trailer => {
            if (!trailer) return res.status(404).json({ message: 'Trailer no encontrado' });
            res.status(200).json({ message: 'Trailer eliminado correctamente' });
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
};

// Obtener un trailer por ID con manejo de error si no se encuentra
const getTrailerById = (req, res) => {
    const { id } = req.params;

    trailer.findById(id)
        .then(trailer => {
            if (!trailer) {
                // Si el trailer no se encuentra, devolvemos un error 404
                return res.status(404).json({ message: 'Trailer no encontrado' });
            }
            res.json(trailer);
        })
        .catch(error => {
            // Si ocurre otro tipo de error (por ejemplo, formato de ID inválido)
            res.status(500).json({ message: 'Error interno del servidor', error });
        });
};


module.exports = {
    getTrailer,
    getTrailerByGenero,
    getTrailerByActor,
    getTrailerByTemporadas,
    createTrailer,
    deleteTrailer,
    getTrailerById
};