console.log("Nuevo Ticket HTML");

// Referencias del HTML

const lbNuevoTicket = document.querySelector("#lblNuevoTicket");
const btnCrear = document.querySelector("button");

const socket = io();

socket.on("connect", () => {
  // console.log('Conectado');

  btnCrear.disabled = false;
});

socket.on("disconnect", () => {
  // console.log('Desconectado del servidor');

  btnCrear.disabled = true;
});

socket.on("enviar-mensaje", (payload) => {
  console.log(payload);
});

socket.on("ultimo-ticket", (payload) => {
  lbNuevoTicket.innerText = `Ticket ${payload}`;
});

btnCrear.addEventListener("click", () => {
  socket.emit("siguiente-ticket", null, (ticket) => {
    console.log("Desde el server", ticket);
    lbNuevoTicket.innerText = ticket;
  });
});
