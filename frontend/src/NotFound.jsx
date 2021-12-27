import React from "react";
import logo from "./Assets/boipoka_logo.svg";

const NotFound = () => {
  return (
    <div className='flex flex-col flex-wrap justify-center content-center text-darkblue mt-5'>
      <img src={logo} alt='Boipoka Logo' height='100px' width='100px' />
      <div>
        <h1 className='font-bold text-6xl text-center mt-5'>
          Oops! 404 Not Found!
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
