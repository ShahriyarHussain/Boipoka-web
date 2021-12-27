import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/boipoka_logo.svg";
import { UserContext } from "../../UserContext";
function Login() {
  const base_url = "http://127.0.0.1:8000/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Work in progress");
  const { loggedIn, setloggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  console.log("first", loggedIn);
  console.log("next", localStorage.getItem("token") ? true : false);

  useEffect(() => {
    if (localStorage.getItem("token") ? true : false) {
      fetch(base_url + "users/current_user", {
        method: "GET",
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.status);
            return response.json();
          } else {
            setloggedIn(false);
            setMessage("Session expired, please login again");
            return response.statusText;
          }
        })
        .then((json) => {
          if (json === "Bad Request") {
            console.log(json);
            setMessage("Invalid Credentials");
            return "";
          } else {
            console.log(json);
            setloggedIn(true);
            setMessage("Login Success");
            navigate("/home");
          }
        });
    }
  }, []);

  console.log("after", loggedIn);

  const loginHandler = (e) => {
    e.preventDefault();
    setMessage("Logging in");
    const loginData = { username, password };
    fetch(base_url + "token-auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return response.statusText;
        }
      })
      .then((json) => {
        if (json === "Bad Request") {
          setMessage("Invalid Credentials");
          return "";
        } else {
          localStorage.setItem("token", json.token);
          setloggedIn(true);
          setMessage("Login Success");
          navigate("/home");
        }
      });
  };

  return (
    <div>
      <div className='flex flex-col items-center'>
        <img src={logo} height='100px' width='100px' alt='Boipoka Logo' />
        <h2 className='font-extrabold text-5xl p-2 m-4'>Login To Boipoka</h2>
      </div>

      <div className='flex flex-col items-center'>
        <form
          className='flex flex-col justify-center p-2 m-2 max-w-md h-auto'
          onSubmit={loginHandler}>
          <label className='m-2'>Username</label>
          <input
            className='rounded-md border-2 border-gray-200 drop-shadow-sm h-8'
            type='text'
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <label className='m-2'>Password</label>
          <input
            className='rounded-md border-2 border-gray-200 drop-shadow-sm h-8'
            type='password'
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className='bg-mildorange text-darkblue font-bold rounded-3xl p-2 mt-4 max-h-10 max-w-md'>
            Log In
          </button>
        </form>

        <p className='text-red-600 m-5 p-3 font-bold text-2xl'>{message}</p>
      </div>
    </div>
  );
}

export default Login;
