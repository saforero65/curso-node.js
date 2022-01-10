const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Santiago",
  },
  {
    id: 3,
    nombre: "Juan",
  },
];
const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
  {
    id: 3,
    salario: 2500,
  },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);

  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id)?.salario;
  if (salario) {
    callback(null, salario);
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
};

const id = 1;
getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("ERROR");

    return console.log(err);
  }
  console.log("Empleado existe");
  console.log(empleado.nombre);

  getSalario(id, (err, salario) => {
    if (err) {
      console.log("ERROR");

      return console.log(err);
    }
    console.log("El empleado:", empleado, "tiene un salario de", salario);
  });
});
