const express = require('express');
const routes = express.Router();
const exposicionControlles = require('../../Controllers/exposicionControlles')

routes.get('/api/listarUsuarios',exposicionControlles.listarUsuarios);
routes.post('/api/agregarUsuarios',exposicionControlles.agregarUsuarios);
routes.delete('/api/EliminarUsuairos/:id',exposicionControlles.EliminaUsuarios);
routes.put('/api/ModificarUsuarios/:id',exposicionControlles.ModifiUsuarios);



module.exports = routes
