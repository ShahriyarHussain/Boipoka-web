import React, { useState, useEffect } from "react";
import NavComponent from "./NavComponent";
import Navigator from "./Navigator";

// const base_url = window.SERVER_ADDRESS;

const base_url = "http://127.0.0.1:8000/";

function Requests() {
  const [userData, setuserData] = useState({
    logged_in: localStorage.getItem("token") ? true : false,
    username: "",
    displayed_form: "",
  });

  useEffect(() => {
    if (userData.logged_in) {
      fetch(base_url + "users/current_user", {
        method: "GET",
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((resp) => {
          console.log(resp);
          setuserData((previousData) => {
            return {
              ...previousData,
              username: resp.username,
            };
          });
        })
        .catch((err) => console.log("fetch error", err));
    }
  }, []);

  const display_form = (formName) => {
    console.log("func", formName);
    setuserData({ displayed_form: formName });
  };

  const handleLoginChange = (e) => {
    setuserData((previousData) => {
      return {
        ...previousData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setuserData({
      logged_in: false,
      username: "",
      displayed_form: "",
    });
  };

  const handleLogin = (e, data) => {
    e.preventDefault();
    console.log("data:", data);
    fetch(base_url + "token-auth/", {
      crossDomain: true,
      withCredentials: true,
      async: true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        setuserData({
          logged_in: true,
          username: json.user.username,
        });
      })
      .catch((error) => {
        console.log("handlelogin error", error);
      });
    setuserData({ displayed_form: "" });
  };
  const { logged_in, username, displayed_form } = userData;

  const navigator = (
    <Navigator
      username={username}
      logged_in={logged_in}
      logoutFunc={handleLogout}
    />
  );

  return (
    <div className='flex-col content-center'>
      {userData.logged_in ? (
        navigator
      ) : (
        <h3>Log in or sign up to start browsing</h3>
      )}

      <NavComponent
        logged_in={logged_in}
        handleLogin={handleLogin}
        handleLoginChange={handleLoginChange}
        handleLogout={handleLogout}
        username={username}
        displayed_form={displayed_form}
        display_form={display_form}
      />
    </div>
  );
}

export default Requests;
