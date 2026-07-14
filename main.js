const express = require("express");

const app = express();

const PORT = 3000;

// Permite recibir datos en formato JSON
app.use(express.json());

// Importar las rutas del sistema PQRS
const pqrsRoutes = require("./routes/pqrsRoutes");

// Rutas del sistema académico
app.get("/", (request, response) => {
    response.send("Bienvenido al Sistema de Gestión Académica.");
});

app.get("/aprendices", (request, response) => {
    response.send("Aquí se administra la información de los aprendices.");
});

app.get("/programas", (request, response) => {
    response.send("Aquí se administra la información de los programas de formación.");
});

// Agregar las rutas de PQRS
app.use("/", pqrsRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});