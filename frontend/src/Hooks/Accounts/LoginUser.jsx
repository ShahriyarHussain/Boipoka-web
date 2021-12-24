import React, { useState } from "react";

function LoginUser(props) {
  const [password, setpassword] = useState("");

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={(e) =>
          props.handleLogin(e, {
            username: props.username,
            password: password,
          })
        }>
        <ul>
          <li>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              onChange={props.handleLoginChange}
              value={props.username}
              name='username'
              id='username'
              placeholder='Username'
            />
          </li>
          <li>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              onChange={handlePasswordChange}
              value={password}
              name='password'
              id='password'
              placeholder='Password'
            />
          </li>
        </ul>
        <button
          className='bg-darkblue text-white rounded-lg p-2 m-2'
          type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginUser;
