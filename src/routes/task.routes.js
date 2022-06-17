import { Router } from "express";

import {
  getTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.get("/tasks/:id", getOneTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
