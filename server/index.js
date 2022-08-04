const express = require('express');
const cors = require('cors');
const app = express();

const UserRouter = require('./route/user.route');
const EventosRouter = require('./route/eventos.route');
const PagamentosRouter = require('./route/pagamentos.route');

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use(UserRouter);
app.use(EventosRouter);
app.use(PagamentosRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}.`);
});
