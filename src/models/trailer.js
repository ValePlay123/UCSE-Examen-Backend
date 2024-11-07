const mongoose = require('mongoose')

const TrailerSchema = new mongoose.Schema({
    id: Number,
    poster: String,
    titulo: String,
    categoria: String,
    genero: [String],
    gen: String,
    busqueda: [String],
    resumen: String,
    temporadas: Number,
    reparto: [String],
    trailer: String
})

const trailers = mongoose.model('trailers', TrailerSchema)

module.exports = trailers