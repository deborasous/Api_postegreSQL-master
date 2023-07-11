const {
  createCompany,
  listCompanies,
  listOneCompany,
  updateCompany,
} = require('../controllers/companies.controller');
const { Router } = require('express');

class CompanyRouter {
  router() {
    const companyRoutes = Router();

    companyRoutes.post('/criarcompania', createCompany);
    companyRoutes.get('/listarcompania', listCompanies);
    companyRoutes.get('/listarumacompania/:id', listOneCompany);
    companyRoutes.put('/atualizarcompania/:id', updateCompany);

    return companyRoutes;
  }
}

module.exports = new CompanyRouter().router();
