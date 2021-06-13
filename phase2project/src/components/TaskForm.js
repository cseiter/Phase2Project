import React, { useState } from "react";

function TaskForm(props) {
  const [formData, setFormData] = useState({
    name: "task name",
    image: "image url",
    template: "task template",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://phase2projectbackend.herokuapp.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: formData.prompt,
        name: formData.name,
        template: formData.template,
        image: formData.image
      }),
    });
  }

  return (
    <section>
      <h1>New Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Task Image
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Task template:
          <input
            type="text"
            name="template"
            value={formData.template}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}

export default TaskForm;
