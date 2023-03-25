import "./App.css";
import React from "react";
import Login from "./components/login";
import Dashboard from "./page/dashboard/dahsboard";
import Rememberance from "./page/rememberance";

// import Rememberance from "./page/rememberance";
import Memerycard from "./page/rememberance/memerycard";

function App() {
  return (
    <div className="App">
      <Rememberance />
    </div>
  );
}

export default App;
