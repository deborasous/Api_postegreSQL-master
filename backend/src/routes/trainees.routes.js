const {
  createTrainee,
  listTrainees,
  listOneTrainee,
  updateTrainee
} = require('../controllers/trainees.controller');
const { Router } = require('express');

class TraineeRouter {
  router() {
    const traineeRoutes = Router();

    traineeRoutes.post('/criartrainee', createTrainee);
    traineeRoutes.get('/listatrainee', listTrainees);
    traineeRoutes.get('/listaumtrainee/:id', listOneTrainee);
    traineeRoutes.get('/atualizartrainee/:id', updateTrainee);

    return traineeRoutes;
  }
}

module.exports = new TraineeRouter().router();
