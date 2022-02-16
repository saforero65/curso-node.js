const socketController = (socket) => {
  console.log("cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("CLiente Desconectado", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123456;
    callback({ id, fecha: new Date().getTime() });
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = {
  socketController,
};
