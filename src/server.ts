/**
 * CONTROLADOR - Punto de Entrada del Servidor
 * 
 * Inicia el servidor Express en el puerto configurado
 */

import app from "./app.js";

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
