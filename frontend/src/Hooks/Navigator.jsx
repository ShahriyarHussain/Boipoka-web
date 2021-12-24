import React, { useState } from "react";
import SideNavBar from "../Components/SideNavBar/SideNavBar";
import Community from "../Components/Community/Community";
import Trades from "../Components/Trade/Trade";
import Homepage from "../Components/Homepage/Homepage";
import Wishlist from "../Components/Wishlist/Wishlist";
import CartPage from "../Components/CartPage/CartPage";
import Support from "../Components/Support/Support";
import Account from "../Components/Account/Account";
// import Requests from "./Requests";
// import SettingsPage from "./Components/SettingsPage/SettingsPage";

function Navigator(props) {
  const [pageNo, setPageNo] = useState(0);

  if (props.loggged_in === false) {
    return (
      <div>
        <div>
          <div className='flex-row ml-16 h-auto w-auto'>
            <h1 className='font-bold text-4xl p-2 m-5'>You Are Logged Out!</h1>
          </div>
        </div>
      </div>
    );
  } else {
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
      setPageNo(number);
    };

    return (
      <div>
        <div>
          <SideNavBar click={pageSetter} logoutFunc={props.logoutFunc} />
          <div className='flex-row ml-16 h-auto w-auto'>
            <h1 className='font-bold text-4xl p-2 m-5'>
              Hello! {props.username}
            </h1>
          </div>
          {componentList[pageNo]}
        </div>
      </div>
    );
  }
}

export default Navigator;
