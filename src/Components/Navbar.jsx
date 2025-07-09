import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg py-6">
      <div className=" w-8/12 mx-auto flex justify-between items-center gap-5 font-medium ">
        <div>
            <Link className='font-bold text-2xl text' to="/">Shuvo</Link>
        </div>
        <div className="flex gap-5 text-xl font-medium">
            <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
