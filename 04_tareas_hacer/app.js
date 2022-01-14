require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require("./helpers/inquirer");
const { Tareas } = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();
  if (tareasDB) {
    // Establecer las tareas
    tareas.cargarTareasFromSrray(tareasDB);
  }

  do {
    //imprimir el menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        // crear opcion
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPenientesCompletadas();
        break;
      case "4":
        tareas.listarPenientesCompletadas(false);
        break;
      case "5":
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        console.log(ids);
        tareas.toggleCompletadas(ids);
        break;
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("Estas seguro?");
          // console.log({ ok });
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea Borrada");
          }
        }
        break;
      default:
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
