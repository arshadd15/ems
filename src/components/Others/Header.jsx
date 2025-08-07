import React from "react";

const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };
  return (
    <div className="flex items-center justify-between px-2">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {data && data.firstName ? data.firstName : "Admin"} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="py-2 px-3 font-medium bg-red-600 rounded-md transition-all duration-200 hover:scale-110 hover:bg-red-500 active:bg-red-400 active:scale-90"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
