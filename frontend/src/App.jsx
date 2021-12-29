import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContext } from "./Hooks/UserContext";
import "./App.css";
import NotFound from "./NotFound";
import Login from "./Components/UserAuthentication/Login";
import Register from "./Components/UserAuthentication/Register";
import PostDetails from "./Components/Community/PostDetails";
import Homepage from "./Components/Homepage/Homepage";
import Listings from "./Components/Trade/Listings";
import Community from "./Components/Community/Community";
import Wishlist from "./Components/Wishlist/Wishlist";
import CartPage from "./Components/CartPage/CartPage";
import Account from "./Components/Account/Account";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import CreatePost from "./Components/Community/CreatePost";
import UpdatePost from "./Components/Community/UpdatePost";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(-1);

  return (
    <Router>
      <div>
        <UserContext.Provider
          value={{
            loggedIn,
            setloggedIn,
            username,
            setUsername,
            userId,
            setUserId,
          }}>
          {loggedIn ? <SideNavBar /> : ""}
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='posts/:id' element={<PostDetails />} />
            <Route path='posts/update/:id' element={<UpdatePost />} />
            <Route path='/' element={<Homepage />} />
            <Route path='/listings' element={<Listings />} />
            <Route path='/community' element={<Community />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/account' element={<Account />} />
            <Route path='/create_post' element={<CreatePost />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
