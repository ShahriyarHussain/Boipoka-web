import React, { useState } from "react";
import "./App.css";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import Community from "./Components/Community/Community";
import Trades from "./Components/Trade/Trade";
import Homepage from "./Components/Homepage/Homepage";
import Wishlist from "./Components/Wishlist/Wishlist";
import CartPage from "./Components/CartPage/CartPage";
import Support from "./Components/Support/Support";
import Account from "./Components/Account/Account";
// import SettingsPage from "./Components/SettingsPage/SettingsPage";

function App() {
  const [page, setPage] = useState(0);

  const componentList = [
    <Homepage />,
    <Trades />,
    <Community />,
    <Wishlist />,
    <CartPage />,
    <Account />,
    <Support />,
  ];

  const pageSetter = (number) => {
    setPage(number);
  };

  return (
    <div>
      <div>
        <SideNavBar click={pageSetter} />
        {componentList[page]}
      </div>
    </div>
  );
}

export default App;
