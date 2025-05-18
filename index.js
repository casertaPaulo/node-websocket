const io = require("socket.io")(3000, {
    cors: { origin: "*" }
  });
  
  let entregadores = {};
  
  io.on("connection", (socket) => {
    console.log("Conectado: ", socket.id);
  
    socket.on("updateLocation", (data) => {
      entregadores[data.idEntregador] = { lat: data.lat, lng: data.lng };
      io.emit("locationUpdate", entregadores);
      console.log(entregadores)
    });
  
    socket.on("disconnect", () => {
      console.log("Desconectado: ", socket.id);
    });
  });
  