const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/user");

const router = Router();

router.get("/", usuariosGet);

router.put("/", usuariosPut);

router.post("/", usuariosPost);

router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);
module.exports = router;
