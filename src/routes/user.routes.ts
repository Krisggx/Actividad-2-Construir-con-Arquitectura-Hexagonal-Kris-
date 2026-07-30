/**
 * CONTROLADOR - Rutas de Usuario
 * 
 * Define los endpoints de la API y mapea a funciones controladoras
 * Métodos HTTP:
 * - GET /api/users        → obtener lista de usuarios
 * - POST /api/users       → crear nuevo usuario
 * - DELETE /api/users/:id → eliminar usuario
 * - PATCH /api/users/:id/password → cambiar password
 */

import { Router } from "express";
import { deleteUser, getUsers, patchUserPassword, postUser } from "../Presentation/Controllers/user.controller.js";

const router = Router();

router.get("/users", getUsers);
router.post("/users", postUser);
router.patch("/users/:id/password", patchUserPassword);
router.delete("/users/:id", deleteUser);

export default router;
