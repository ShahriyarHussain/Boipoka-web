import React, { useContext, useEffect, useState } from "react";
import SideNavBar from "../Components/SideNavBar/SideNavBar";
import Community from "../Components/Community/Community";
import Trades from "../Components/Trade/Trade";
import Homepage from "../Components/Homepage/Homepage";
import Wishlist from "../Components/Wishlist/Wishlist";
import CartPage from "../Components/CartPage/CartPage";
import Support from "../Components/Support/Support";
import Account from "../Components/Account/Account";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
// import Requests from "./Requests";
// import SettingsPage from "./Components/SettingsPage/SettingsPage";

function Navigator(props) {
  const [pageNo, setPageNo] = useState(0);
  const { loggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  console.log("nav", loggedIn, !loggedIn);

  if (!loggedIn) {
    console.log("if", loggedIn);
    navigate("/login");
    console.log("if", loggedIn);
  }

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
    return () => {
      console.log("stopped", loggedIn);
    };
  }, []);

  // if (props.loggged_in === false) {
  //   return (
  //     <div>
  //       <div>
  //         <div className='flex-row ml-16 h-auto w-auto'>
  //           <h1 className='font-bold text-4xl p-2 m-5'>You Are Logged Out!</h1>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
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
        {/* <SideNavBar click={pageSetter} logoutFunc={props.logoutFunc} /> */}
        <SideNavBar click={pageSetter} />
        <div className='flex-row ml-16 h-auto w-auto justify-start content-start'>
          <h1 className='font-bold text-4xl p-2 m-5'>
            {/* Hello! {props.username} */}
            Hello! {loggedIn}
          </h1>
        </div>
        {componentList[pageNo]}
      </div>
    </div>
  );
}

export default Navigator;
