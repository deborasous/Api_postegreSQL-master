const {
  createCategory,
  getAllCategories,
  updateOneCategory,
  deleteOneCategory
} = require('../controllers/category.controller')
const { Router } = require('express');

class CategoryRouter {
  router() {
    const categoryRoutes = Router();

    categoryRoutes.post('/criarcategoria', createCategory);
    categoryRoutes.get('/listarcategorias', getAllCategories);
    categoryRoutes.get('/alterarcategoria/:id', updateOneCategory);
    categoryRoutes.get('/excluicategoria/:id', deleteOneCategory);

    return categoryRoutes;
  }
}

module.exports = new CategoryRouter().router();
