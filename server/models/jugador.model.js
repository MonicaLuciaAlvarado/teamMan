const mongoose = require("mongoose");

const EsquemaJugador = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre obligatorio"],
        minLength: [3, "Nombre debe tener al menos 3 caracteres"],
        maxLength: [30, "Nombre debe de tener menos de 30 caracteres"]
    },
    position: {
        type: String,
        required: [true, "posición obligatoria"]
    },
    age: {
        type: Number,
        min: [17, "Edad mínima de 17 años"]
    },
    imagen: {
        type: String
    },
    play1: {
        type: Boolean,
        default: false
    },
    notplay1: {
        type: Boolean,
        default: false
    },
    undef1: {
        type: Boolean,
        default: false
    },
    play2: {
        type: Boolean,
        default: false
    },
    notplay2: {
        type: Boolean,
        default: false
    },
    undef2: {
        type: Boolean,
        default: false
    },
    play3: {
        type: Boolean,
        default: false
    },
    notplay3: {
        type: Boolean,
        default: false
    },
    undef3: {
        type: Boolean,
        default: false
    }
}, {timestamps: true, versionKey: false})
//timestamps: me crea campos de createdAt y updatedAt
//versionKey: false me elimina el atributo _v que se crea en automático

const Jugador = mongoose.model("jugadores", EsquemaJugador);
module.exports=Jugador;