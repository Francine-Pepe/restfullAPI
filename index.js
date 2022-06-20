// config inicial
require('dotenv').config()
const express = require("express"); //importou o express
const mongoose = require("mongoose"); //importou o mongoose
const app = express(); //inicializa o express

const Person = require("./models/Person");

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota incial / endpoint
app.get("/", (req, res) => {
  // mostrar req

  res.json({ message: "Oi Express!" });
});

// mongodb+srv://FrancinePepe:851058Flm@apicluster.7pbpy.mongodb.net/bancodaapi?retryWrites=true&w=majority

// entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.7pbpy.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectamos o MongoDB!");
    app.listen(3000);
  }) //quando conecta com sucesso
  .catch((err) => console.log(err)); //para pegar algum erro

// app.listen(3000);

