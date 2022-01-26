const { response } = require("express");
const bcrypt = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosGet = (req, res = response) => {
  const params = req.query;

  res.json({
    msg: "get Api - Controlador",
    params,
  });
};
const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put Api - Controlador",
    id,
  });
};

const usuariosPost = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //verificar si el correo existe
  const existeCorreo = await Usuario.findOne({ correo });
  if (existeCorreo) {
    return res.status(400).json({ msg: "El correo ya esta registrado" });
  }

  //encriptar contrasenia
  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);

  //guardar en DB
  await usuario.save();

  res.status(201).json({
    msg: "post Api - Controlador",
    usuario,
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
