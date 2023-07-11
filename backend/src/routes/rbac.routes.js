const {
  createPermission,
  listPermission,
  listRole,
  createRole,
  addPermissionByRole,
  listPermissionByRole,
  addRoleUser,
  deletePermission,
} = require('../controllers/rbac.controller');
const { Router } = require('express');

class RBACRouter {
  router() {
    const rbacRoutes = Router();

    rbacRoutes.post('/criarPermissao', createPermission);
    rbacRoutes.get('/listarPermissoes', listPermission);
    rbacRoutes.delete('/excluirPermissao/:id', deletePermission);
    rbacRoutes.post('/criarFuncoes', createRole);
    rbacRoutes.get('/listarFuncoes', listRole);
    rbacRoutes.post('/addPermissaoFuncao/:id', addPermissionByRole);
    rbacRoutes.get('/listarPermissaoFuncao/:id', listPermissionByRole);
    rbacRoutes.post('/addFuncaoUsuario/:id', addRoleUser);

    return rbacRoutes;
  }
}

module.exports = new RBACRouter().router();
