import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Community from "./Components/Community/Community";

function App() {
  return (
    <div>
      <div>
        <Sidebar />
        <Community />
      </div>
    </div>
  );
}

export default App;
