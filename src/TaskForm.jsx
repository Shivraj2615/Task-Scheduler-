import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TaskForm({addTask}) {
  let [newTask, setNewTask] = useState("");
  let [priority, setPriority] = useState("top");
  let [deadline, setDeadline] = useState("");

  const handleSubmit = () => {
    if (newTask.trim() === "" || deadline === "") {
      alert("Please enter a task and select a valid deadline.");
      return;
    }

    const selectedDate = new Date(deadline);
    const todayDate = new Date();

    if (selectedDate <= todayDate) {
      alert("Please select a future date for the deadline.");
      return;
    }

    let taskObj = {
      id: uuidv4(),
      task: newTask,
      priority: priority,
      deadline: deadline,
      isDone: false,
    };

    addTask(taskObj);

    setNewTask("");
    setPriority("top");
    setDeadline("");
  };

  return (
    <>
      <div className="TaskForm">
        <input
          type="text"
          placeholder="Enter Task"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <select
          name="priority"
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
        >
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <input
          type="date"
          value={deadline}
          onChange={(e) => {
            setDeadline(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Add Task</button>
      </div>
    </>
  );
}
