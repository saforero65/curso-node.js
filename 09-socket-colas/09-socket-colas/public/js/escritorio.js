console.log("Escritorio HTML");

const lbEscritorio = document.querySelector("h1");
const btnAtender = document.querySelector("button");
const lbTicket = document.querySelector("small");
const divAlert = document.querySelector(".alert");
const lbPendientes = document.querySelector("#lbPendientes");

const searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("El escritorio es obligatorio");
}
const escritorio = searchParams.get("escritorio");
lbEscritorio.innerText = escritorio;
divAlert.style.display = "none";

const socket = io();

socket.on("connect", () => {
  // console.log('Conectado');

  btnAtender.disabled = false;
});

socket.on("disconnect", () => {
  // console.log('Desconectado del servidor');

  btnAtender.disabled = true;
});

socket.on("tickets-pendientes", (pendientes) => {
  if (pendientes === 0) {
    lbPendientes.style.display = "none";
  } else {
    lbPendientes.style.display = "";
    lbPendientes.innerText = pendientes;
  }
});

btnAtender.addEventListener("click", () => {
  socket.emit("atender-ticket", { escritorio }, ({ ok, ticket, msg }) => {
    if (!ok) {
      lbTicket.innerText = `Nadie `;

      return (divAlert.style.display = "");
    }
    lbTicket.innerText = `Ticket ${ticket.numero}`;
  });
});
