const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;
console.log("ESTE ES MI SERVER CORRECTO 🔥");

app.use(cors());
app.use(express.json());

// Base de datos en memoria
let servicios = [
    { id: 1, nombre: "Uñas acrílicas", precio: 350 },
    { id: 2, nombre: "Gelish", precio: 250 },
    { id: 3, nombre: "Polygel", precio: 400 }
];

// Obtener servicios
app.get("/servicios", (req, res) => {
    res.json(servicios);
});

// Agregar servicio
app.post("/servicios", (req, res) => {
    const { nombre, precio } = req.body;

    if (!nombre || !precio) {
        return res.status(400).json({ mensaje: "Datos incompletos" });
    }

    const nuevoServicio = {
        id: servicios.length + 1,
        nombre,
        precio
    };

    servicios.push(nuevoServicio);

    console.log("Servicio agregado:", nuevoServicio);

    res.status(201).json(nuevoServicio);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});