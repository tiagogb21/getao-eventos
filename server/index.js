const express = require('express');
const cors = require("cors");

const UserRouter = require('./route/user.route');

const app = express();

require('dotenv').config();

app.use(express.json());

app.use(cors());

app.use(UserRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}.`);
});
