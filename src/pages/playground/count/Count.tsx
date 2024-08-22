import { useState } from "react";

export function Count() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>Componete Contador</h2>

      <p>O valor atual do meu estado {value}</p>

      <button onClick={() => setValue(value + 1)}>Adicionar + 1</button>
    </div>
  );
}
