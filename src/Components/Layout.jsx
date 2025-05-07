import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar - always visible on the left */}
      <Sidebar />

      {/* Right side layout */}
      <div className="flex flex-col flex-1">
        {/* Header - top bar */}
        <Header />

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>

        {/* Footer - always at the bottom */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
