import express from 'express';
import * as controller from '../controllers/usuariosController.js';

const router = express.Router();

router.post('/usuarios/registro', controller.registrar); //http:localhost:3000/api/v1/stockapi/usuarios/registros
//passar no body o nome, email e a senha do usúario 

export default router;