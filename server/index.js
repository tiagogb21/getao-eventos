const express = require('express');
const cors = require("cors");
const app = express();

const UserRouter = require('./route/user.route');

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use(UserRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}.`);
});
