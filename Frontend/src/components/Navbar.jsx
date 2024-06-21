import React, { useState } from "react";
import Login from "./Login";


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50  ">
      {/* Button for mobile view */}
      <div className="navbar-mobile-button sm:hidden">
        <button className="btn btn-ghost" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Centered "Book Store" title */}
      <div className="navbar-center flex items-center justify-center sm:justify-start">
        <a className="btn btn-ghost text-xl sm:text-2xl md:text-3xl">
          Book Store
        </a>
      </div>

      {/* Menu for larger screens */}
      <div
        className={`navbar-menu ${
          showMenu ? "block" : "hidden"
        } sm:flex sm:items-center sm:justify-center text-center`}
      >
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="btn btn-ghost" href="/">Home</a>
          </li>
          <li>
            <a className="btn btn-ghost" href="/Course">Course</a>
          </li>
          <li>
            <a className="btn btn-ghost" href="/Contact">Contact</a>
          </li>
          <li>
            <a className="btn btn-ghost" href="/About">About</a>
          </li>
        </ul>
      </div>

      {/* Right section */}
      <div className="navbar-end ">
       <div className="hidden md:block">
       <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path fillRule="evenodd"d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"clipRule="evenodd"/>
          </svg>
        </label>
       </div>
       <div className="">
        <a 
          className="bg-black text-white font-bold px-3 p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer ml-5"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
           Login
        </a>

        <Login />
        </div>

      </div>
    </div>
  );
}

export default Navbar;
