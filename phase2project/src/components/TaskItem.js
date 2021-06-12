import React from "react";

function TaskItem({ task }) {
  const { id, name, image, template } = task;

  return (
    <li>
      <h4>Task {id}</h4>
      <h5>{name}</h5>
      <br />{image}
      <br />{template}
    </li>
  );
}

export default TaskItem;
