const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Middlewares
    this.middlewares();
    //Rutas de mi aplicación
    this.routes();
  }
  middlewares() {
    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "get Api",
      });
    });

    this.app.put("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "put Api",
      });
    });

    this.app.post("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "post Api",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "delete Api",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}
module.exports = Server;
