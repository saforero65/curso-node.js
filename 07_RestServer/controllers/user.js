const { response } = require("express");

const usuariosGet = (req, res = response) => {
  res.json({
    msg: "get Api - Controlador",
  });
};
const usuariosPut = (req, res) => {
  res.status(400).json({
    msg: "put Api - Controlador",
  });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "post Api - Controlador",
    nombre,
    edad,
  });
};
const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete Api - Controlador",
  });
};
const usuariosPatch = (req, res) => {
  res.json({
    msg: "patch Api - Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPut,
  usuariosPatch,
};
