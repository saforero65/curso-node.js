const http = require("http");

http
  .createServer((req, res) => {
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });

    // res.write("id,nombre\n");
    // res.write("1,nombre1\n");
    // res.write("2,nombre2\n");
    // const persona = {
    //   id: 1,
    //   nombre: "Santiago",
    // };
    // res.write(JSON.stringify(persona));

    res.write("Hola Mundo");
    res.end();
  })
  .listen(8080);
console.log("Escuchando el puerto", 8080);
