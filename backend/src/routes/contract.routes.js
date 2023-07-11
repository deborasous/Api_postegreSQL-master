const {
  createOneContract,
  listContracts,
  listOneContract,
  deactivateContract,
} = require("../controllers/contract.controller");
const { Router } = require("express");
const { auth } = require('../middleware/auth');

class ContractRouter {
  router() {
    const contractRoutes = Router();

    contractRoutes.post("/criarContrato", auth, createOneContract);
    contractRoutes.get("/listarContrato", auth, listContracts);
    contractRoutes.get("/listarUmContrato/:id", auth, listOneContract);
    contractRoutes.patch("/terminarContrato/:id", auth, deactivateContract);

    return contractRoutes;
  }
}

module.exports = new ContractRouter().router();
