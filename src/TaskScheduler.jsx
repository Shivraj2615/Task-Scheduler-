import TaskForm from "./TaskForm";
import UpcomingTasks from "./UpcomingTasks";
import CompletedTasks from "./CompletedTasks";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TaskScheduler() {
    let [tasks, setTasks] = useState([]);

  let [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (taskObj) => {
    setTasks([...tasks, taskObj]);
  };

  const deleteTask = (id) => {
    let updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const markTaskDone = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: true };
      }
      return task;
    });
    setTasks(updatedTasks);

    const completedTask = tasks.find((task) => task.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  return (
    <div className="TaskScheduler">
        <h1>Task Scheduler</h1>
        <TaskForm addTask={addTask} />
        <UpcomingTasks tasks={tasks} deleteTask={deleteTask} markTaskDone={markTaskDone}/>
        <CompletedTasks completedTasks={completedTasks}/>
    </div>
  )
}

