const Jugador = require("../models/jugador.model");


module.exports.crear_jugador = (req, res) =>{
    const {name, position, age, imagen, play, notplay, undef} = req.body;
    Jugador.create({
        name,
        position,
        age,
        imagen,
        play,
        notplay,
        undef
    })
    .then(jugador => res.json(jugador))
    .catch(err => res.json({message: "Hubo un error"+err}));
}

module.exports.ver_todos = (req,res) =>{
    Jugador.find().sort({name: 1}) //1 = ASC (A-Z), -1 = DESC(Z-A)
    .then(jugador => res.json(jugador))
    .catch(err => res.json({message: "Hubo un error"+err}))
}

module.exports.ver_uno = (req, res) =>{
    Jugador.findOne({_id: req.params.id})
    .then(jugador => res.json(jugador))
    .catch(err => res.json({message: "Hubo un error"+err}))
}

module.exports.update_jugador = (req, res) => {
    Jugador.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true,runValidators: true})
    .then(jugador => res.json(jugador))
    .catch(err => res.json({message: "Hubo un error"+err}));
}

module.exports.borrar_jugador = (req, res) => {
    Jugador.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json({message: "Hubo un error "+err}));
}