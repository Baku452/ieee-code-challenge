const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Router } = require("express");

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://ZeroWasteBuddy:OdIRkDgElUZqePfJ@anfitriones.n5coy.mongodb.net/anfitrionesDB",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

//Data Schema
const dataSchema = {
  Nombre: String,
  Apellido: String,
  Ciudad: String,
  Cp: String,
  Pais: String,
  Propiedad: String,
  RedWifi: String,
  ClaveWifi: String,
};

const Data = mongoose.model("Anfitrion", dataSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let newData = new Data({
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Ciudad: req.body.Ciudad,
    Cp: req.body.Cp,
    Pais: req.body.Pais,
    Propiedad: req.body.Propiedad,
    RedWifi: req.body.RedWifi,
    ClaveWifi: req.body.ClaveWifi,
  });
  newData.save();

  res.sendFile(__dirname + "/confirmacion.html");
});

app.listen(port, function () {
  console.log("Server is running");
});
