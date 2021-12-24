import React from "react";
import LoginUser from "./Accounts/LoginUser";
import RegisterUser from "./Accounts/RegisterUser";

function NavComponent(props) {
  let form;

  // console.log(props.displayed_form);

  switch (props.displayed_form) {
    case "login":
      form = (
        <LoginUser
          handleLoginChange={props.handleLoginChange}
          handleLogin={props.handleLogin}
          username={props.username}
        />
      );
      break;

    case "signup":
      form = <RegisterUser />;
      break;

    default:
      form = null;
      break;
  }

  const logged_in_nav = (
    <ul>
      <li>
        <button
          className='bg-mildorange rounded-lg p-2 m-2'
          onClick={() => props.display_form("login")}>
          Login
        </button>
      </li>
      <li>
        <button
          className='bg-offwhite rounded-lg p-2 m-2 text-black'
          onClick={() => props.display_form("signup")}>
          Sign Up
        </button>
      </li>
    </ul>
  );

  const logged_out_nav = (
    <ul>
      <li>
        <button
          className='bg-darkblue rounded-lg p-2 ml-16 mt-2 text-white cursor-text'
          onClick={props.handleLogout}>
          {props.logged_in ? `Logout` : `Login Again !`}
        </button>
      </li>
    </ul>
  );

  return (
    <div>
      {props.logged_in ? "" : logged_in_nav}
      {form}
    </div>
  );
}

export default NavComponent;
