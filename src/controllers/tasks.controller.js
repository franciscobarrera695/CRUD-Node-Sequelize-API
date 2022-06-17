import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { name, done, ProjectId } = req.body;
    const newTask = await Task.create({
      name,
      done,
      ProjectId,
    });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
      //attributes:['name']
      //devuelve solamente el campo seleccionado
    });
    if (!task) return res.status(404).json({ message: "Task not exist" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({
      where: { id },
    });
    //.set()
    //metodo distinto que usamos en project controller pero
    //cumple la misma funcion!
    task.set(req.body);
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
