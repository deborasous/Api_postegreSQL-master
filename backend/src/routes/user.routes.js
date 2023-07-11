const {
  createOneUser,
  loginUser,
  updateUser,
} = require('../controllers/user.controller');
const { Router } = require('express');
const { hasPermission } = require('../middleware/hasPermission');

class UserRouter {
  router() {
    const userRoutes = Router();

    userRoutes.post('/criarUsuario', createOneUser);
    userRoutes.post('/login', loginUser);


    return userRoutes;
  }
}

module.exports = new UserRouter().router();
