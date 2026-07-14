const pqrsModel = require("../models/pqrsModel");

const obtenerTodas = (request, response) => {
    const mensaje = pqrsModel.obtenerPQRS();
    response.status(200).send(mensaje);
};

const obtenerUna = (request, response) => {
    const id = request.params.id;
    const mensaje = pqrsModel.obtenerPQRSPorId(id);
    response.status(200).send(mensaje);
};

const crear = (request, response) => {
    const mensaje = pqrsModel.crearPQRS();
    response.status(201).send(mensaje);
};

const actualizar = (request, response) => {
    const id = request.params.id;
    const mensaje = pqrsModel.actualizarPQRS(id);
    response.status(200).send(mensaje);
};

const eliminar = (request, response) => {
    const id = request.params.id;
    const mensaje = pqrsModel.eliminarPQRS(id);
    response.status(200).send(mensaje);
};

module.exports = {
    obtenerTodas,
    obtenerUna,
    crear,
    actualizar,
    eliminar
};