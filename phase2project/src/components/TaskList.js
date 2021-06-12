import React,{useEffect,useState} from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks,setTasks] = useState(null);
  useEffect (() => {
    fetch("http://localhost:3000/tasks")
    .then((r) => r.json())
    .then((tasks) => {
      setTasks(tasks);
    });
  },[]);

  const taskItems = tasks.map((t) => (
    <TaskItem
    key={t.id}
    task = {t}
    />
  ));

  return (
    <section>
      <h1>Tasks</h1>
      <ul>{taskItems}</ul>
    </section>
  );
}

export default TaskList;