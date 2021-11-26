import { useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function Saludo() {
    return <h1>Hola {useParams().nombre}</h1>;
  }

  return (
    <BrowserRouter>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Link to={"/saludar/" + input}>Saludar</Link>
      <Routes>
        <Route path="/saludar/:nombre" element={<Saludo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
