import { Router } from "express";
import {
  getProjects,
  createProjects,
  getOneProject,
  updateProject,
  deleteProject,
  getProjectTask,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProjects);
router.get("/projects/:id", getOneProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

router.get("/projects/:id/tasks", getProjectTask);

export default router;
