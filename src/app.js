import express from "express";
import morgan from "morgan";
import projectsRoute from "./routes/projects.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(projectsRoute);
app.use(taskRoutes);

export default app;
