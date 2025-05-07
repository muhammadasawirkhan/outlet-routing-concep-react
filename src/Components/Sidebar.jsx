import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-gray-200 ${
      isActive ? "bg-gray-300 font-semibold" : ""
    }`;

  return (
    <aside className="w-64 bg-gray-100 border-r min-h-screen p-4">
      <h2 className="text-lg font-bold mb-6">Navigation</h2>
      <nav className="space-y-2">
        <NavLink to="/" end className={navLinkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/profile" className={navLinkClass}>
          Profile
        </NavLink>
        <NavLink to="/settings" className={navLinkClass}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
