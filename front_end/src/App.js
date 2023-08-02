import "./App.css";
import { Final } from "./conponents/Final";
import { Inicio } from "./conponents/Inicio";

import { Navbar } from "./conponents/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Inicio></Inicio>
      <Final></Final>
    </div>
  );
}

export default App;
