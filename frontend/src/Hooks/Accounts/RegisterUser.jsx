import React, { useState } from "react";
import Axios from "axios";

const base_url = "http://127.0.0.1:8000/users/";

const required = (val) => val && val.length;
const minLength = (len, val) => !val || val.length < len;
const maxLength = (len, val) => val.length > len;
const isEqual = (p1, p2) => p1 === p2;

function RegisterUser() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    password2: "",
    display_first_name: false,
    display_last_name: false,
    display_username: false,
    display_password: false,
    display_password2: false,
  });
  const [message, setmessage] = useState(false);

  const getErrors = (name, value) => {
    let errors = [];
    // console.log(state.last_name + " -!- " + value + " -!- " + name);
    if (!required(value)) {
      errors.push("This value is required");
    }
    if (minLength(3, value)) {
      errors.push("Greater than 3 characters required");
    }
    if (maxLength(20, value)) {
      errors.push("Cannot be more than 25 characters");
    }
    if (name === "password2" && !isEqual(state.password, value)) {
      errors.push("Password don't match");
    }
    const property = "display_" + name;
    if (errors.length === 0) {
      // setState((previousState) => {
      //   return {
      //     ...previousState,
      //     [property]: false,
      //   };
      // });
      state[property] = false;
    }
    if (state[property]) {
      return (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      );
    }
  };

  function isValid() {
    let valid = true;

    Object.values(state).forEach((val) => {
      if (val === true) {
        valid = false;
        return valid;
      }
    });
    return valid;
  }

  const clearForm = () => {
    setState({
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      password2: "",
      display_first_name: false,
      display_last_name: false,
      display_username: false,
      display_password: false,
      display_password2: false,
    });
  };

  const sendRegistration = (e) => {
    e.preventDefault();
    const { first_name, last_name, username, password } = state;
    if (isValid()) {
      console.log(e, " Inside If");
      Axios.post(base_url + "users/create", {
        user: {
          first_name: first_name,
          last_name: last_name,
          username: username,
          password: password,
        },
      })
        .then((response) => {
          console.log("userReg resp: " + response);
          console.log(
            "userReg: respstat " + response.status + " " + response.statusText
          );
          const message = response.status + " " + response.statusText;
          console.log(message === "200 OK");
          setmessage(message === "200 OK");
        })
        .catch((error) => {
          console.log("userReg: " + error);
        });
      clearForm();
    }
    console.log(e, " Outside If");
  };

  function changeHandler(e) {
    setState((previousState) => {
      return {
        ...previousState,
        ["display_" + e.target.name]: true,
      };
    });

    setState((previousState) => {
      return {
        ...previousState,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div>
      <form onSubmit={sendRegistration} noValidate>
        <div className='m-2 text-black'>
          {message ? `Registration Success! Click Login` : `Fill Up The Form`}
        </div>
        <div>
          <label htmlFor='first_name'> First name </label>
          <input
            className='border-2 border-black'
            type='text'
            id='first_name'
            name='first_name'
            value={state.first_name}
            onChange={changeHandler}
          />
          {getErrors("first_name", state.first_name)}
        </div>
        <div>
          <label htmlFor='last_name'> Last name </label>
          <input
            className='border-2 border-black'
            type='text'
            id='last_name'
            name='last_name'
            value={state.last_name}
            onChange={changeHandler}
          />
          {getErrors("last_name", state.last_name)}
        </div>
        <div>
          <label htmlFor='username'> Username </label>
          <input
            className='border-2 border-black'
            type='text'
            id='username'
            name='username'
            value={state.username}
            onChange={changeHandler}
          />
          {getErrors("username", state.username)}
        </div>
        <div>
          <label htmlFor='pass'> Password </label>
          <input
            className='border-2 border-black'
            type='password'
            id='pass'
            name='password'
            value={state.password}
            onChange={changeHandler}
          />
          {getErrors("password", state.password)}
        </div>
        <div>
          <label htmlFor='pass2'> Password again </label>
          <input
            className='border-2 border-black'
            type='password'
            id='pass2'
            name='password2'
            value={state.password2}
            onChange={changeHandler}
          />
          {getErrors("password2", state.password2)}
        </div>
        <button
          className='bg-darkblue text-white rounded-lg p-2 m-2'
          type='submit'>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
