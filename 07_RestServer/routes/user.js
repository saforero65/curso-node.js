const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const Role = require("../models/rol");

const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/user");

const router = Router();

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);

router.post(
  "/",
  [
    check("nombre", "El nombre  es obligatorio").not().isEmpty(),
    check("correo", "El correo no es valido").isEmail(),
    check(
      "password",
      "El password es obligatorio debe tener mas de 6 caracteres"
    ).isLength({ min: 6 }),
    //check("rol", "No es un rol permitido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("rol").custom(async (rol = "") => {
      const existeRol = await Role.findOne({ rol });
      if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la DB`);
      }
    }),
    validarCampos,
  ],
  usuariosPost
);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);
module.exports = router;
