import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();

  const logoutFunc = () => {
    localStorage.clear();
    window.location = "/auth";
  };

  const openModal = () => {
    dispatch({ type: "MODAL", payload: true });
  };

  return (
    <div className="h-24 bg-red-700 flex items-center justify-between px-6">
      <div className="text-white font-semibold text-2xl cursor-pointer tracking-wider px-1">
        SHARE THE POST
      </div>

      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 outline-none rounded-xl max-md:w-24"
        />
        <div
          onClick={openModal}
          className="w-36 border p-2 rounded-xl text-center text-white cursor-pointer hover:bg-gray-500 max-md:w-26"
        >
          Create Post
        </div>
        <BiLogOut
          onClick={logoutFunc}
          size={25}
          className="text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
