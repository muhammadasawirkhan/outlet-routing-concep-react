import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-center text-sm text-gray-500 p-4 border-t">
      © {new Date().getFullYear()} My Dashboard. All rights reserved.
    </footer>
  );
};

export default Footer;
