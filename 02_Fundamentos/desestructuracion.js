const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  edad: 50,

  getNombre() {
    return `${this.nombre}${this.apellido}${this.poder}`;
  },
};
console.log(deadpool.getNombre());

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
  //   const { nombre, apellido, poder, edad  }

  console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool);

const heroes = ["Deadpol", "Superman", "Batman"];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);
