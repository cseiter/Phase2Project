import React from "react";

function TaskItem({ task }) {
  const { id, name, image, template } = task;

  function selectTask(e) {
    console.log(`Task ${id}, ${name} selected`);
    let target = e.currentTarget;
    target.classList.toggle('selected')
  }

  return (
    <li>
      <h4>Task {id}</h4>
      <h5>{name}</h5>
      <br /><img src={image} alt={name} onClick={selectTask} />
      <br />{template}
    </li>
  );
}

export default TaskItem;
