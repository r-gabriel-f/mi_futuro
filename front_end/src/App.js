import "./App.css";
import { Final } from "./conponents/Final";
import { Inicio } from "./conponents/Inicio";

import { Navbar } from "./conponents/Navbar";
import { Servicios } from "./conponents/Servicios";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Inicio></Inicio>
      <Servicios></Servicios>
      <Final></Final>
    </div>
  );
}

export default App;
