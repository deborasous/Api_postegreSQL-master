const { config } = require('dotenv');
const { verify } = require('jsonwebtoken');
config();

async function auth(req, res, next) {
  try {
    const { authorization } = req.headers;

    console.log(authorization, 'aut');

    verify(authorization, process.env.SECRET_JWT);
    next();
  } catch (error) {
    return res.status(401).send({
      message: 'Autenticação falou.',
      cause: error.message,
    });
  }
}

module.exports = { auth };
