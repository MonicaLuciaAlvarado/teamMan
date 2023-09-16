const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json(), express.urlencoded({extended:true}));

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de React
        origin: "http://localhost:3000"
    })
)

//Inicializar la BD
require("./server/config/mongoose.config");

//Importar rutas
const misRutas = require("./server/routes/jugador.routes");
misRutas(app);

//Ejecutamos el server
app.listen(8000, () =>console.log("Servidor listo!"));