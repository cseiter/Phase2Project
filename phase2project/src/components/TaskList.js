import React,{useEffect,useState} from "react";
import TaskItem from "./TaskItem";

function TaskList({onDeleteTask}) {
  const [tasks,setTasks] = useState([]);
  useEffect (() => {
    fetch("https://phase2projectbackend.herokuapp.com/tasks")
    .then((r) => r.json())
    .then((tasks) => {
      setTasks(tasks);
    });
  },[]);

  const taskItems = tasks.map((t) => (
    <TaskItem
    key={t.id}
    task = {t}
    onDeleteTask={onDeleteTask}
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