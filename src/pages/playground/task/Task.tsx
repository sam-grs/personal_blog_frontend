import { useEffect, useState } from "react";

export function Task() {
  const [completed, setCompleted] = useState(false);
  const [task, setTask] = useState("");

  useEffect(() => {
    if (completed) setTask("Você concluiu a tarefa");
    else setTask("");
  }, [completed]);

  console.log("task", task);
  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{task}</h3>
      <p>Conclua a tarefa</p>

      <button onClick={() => setCompleted(!completed)}>Concluir tarefa</button>
    </div>
  );
}
