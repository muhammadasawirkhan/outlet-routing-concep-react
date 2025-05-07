import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">My Dashboard</h1>
      <div className="text-sm text-gray-600">Logged in as <strong>User</strong></div>
    </header>
  );
};

export default Header;
