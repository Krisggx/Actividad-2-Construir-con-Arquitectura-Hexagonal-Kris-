/**
 * CONTROLADOR - Configuración de Express
 * 
 * Este archivo configura la aplicación Express:
 * - Middleware para servir archivos estáticos (Vista)
 * - Middleware para parsear JSON
 * - Rutas de la API (conecta con Controladores)
 */

import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import userRouter from "./routes/user.routes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use("/api", userRouter);

export default app;
