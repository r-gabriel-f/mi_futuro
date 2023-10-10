import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Contactos } from "./conponents/Contactos";
import { Final } from "./conponents/Final";
import { Inicio } from "./conponents/Inicio";

import { Navbar } from "./conponents/Navbar";
import { Servicios } from "./conponents/Servicios";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      <Final />
    </Router>
  );
}

export default App;
