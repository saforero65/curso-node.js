require("dotenv").config();

const {
  leerInput,
  inquirerMenu,
  pausa,
  listadoLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
// console.log(process.env.MAPBOX_KEY);
const main = async () => {
  let opt;
  const busquedas = new Busquedas();
  do {
    //imprimir el menu
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        //Mostrar mensaje
        const termino = await leerInput("Ciudad: ");

        //Buscar Lugar
        const lugares = await busquedas.ciudad(termino);

        //Seleccionar Lugar
        const idSeleccionado = await listadoLugares(lugares);
        if (idSeleccionado === "0") continue;

        const lugarSel = lugares.find((l) => l.id === idSeleccionado);
        busquedas.agregarHistorial(lugarSel.nombre);

        // Clima
        const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
        // console.log(clima);
        //Mostrar Resultados

        console.log("\nInformacion de la ciudad\n".green);
        console.log("Ciudad: ", lugarSel.nombre.green);
        console.log("Lat: ", lugarSel.lat);
        console.log("Lng: ", lugarSel.lng);
        console.log("Temperatura: ", clima.temp);
        console.log("Minima: ", clima.temp_min);
        console.log("Maxima: ", clima.temp_max);
        console.log("Clima: ", clima.description.green);

        break;

      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });
        break;

      default:
        break;
    }

    await pausa();
  } while (opt !== 0);
};
main();
