import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [page, setPage] = useState("List");

  return (
    <main>
      onChangePage={setPage}
      {page === "Form" ? <TaskForm /> : <TaskList />}
    </main>
  );
}

export default App;