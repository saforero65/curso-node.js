const online = document.querySelector("#online");
const offline = document.querySelector("#offline");

const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

socket.on("connect", () => {
  console.log("conectado");
  offline.style.display = "none";
  online.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Desconectado");
  online.style.display = "none";
  offline.style.display = "";
});

socket.on("enviar-mensaje", (payload) => {
  console.log(payload);
});

btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;
  const payload = {
    mensaje,
    id: "1234",
    fecha: new Date().getTime(),
  };
  socket.emit("enviar-mensaje", payload, (id) => {
    console.log("Desde el server", id);
  });
});
