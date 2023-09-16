const JugadorController= require("../controllers/jugador.controller");

module.exports = app => {
    app.get('/api/jugadores', JugadorController.ver_todos);
    app.post('/api/jugadores', JugadorController.crear_jugador);
    app.get('/api/jugadores/:id', JugadorController.ver_uno);
    app.put('/api/jugadores/:id', JugadorController.update_jugador);
    app.delete('/api/jugadores/:id', JugadorController.borrar_jugador);
}