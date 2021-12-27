import React, { useState } from "react";
import "./App.css";
import Navigator from "./Hooks/Navigator";
// import Requests from "./Hooks/Requests";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Components/UserAuthentication/Login";
import Register from "./Components/UserAuthentication/Register";
import { UserContext } from "./UserContext";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const value = { loggedIn, setloggedIn };

  // const loggedInView = <Navigator />;
  // const loggedOutView = <Navigator />;

  return (
    <Router>
      <div>
        <UserContext.Provider value={value}>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Navigator />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
