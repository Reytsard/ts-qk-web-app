import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="h-full w-full bg-gray-700 overflow-hidden">
      <div className="h-20 flex justify-between items-center bg-purple text-white">
        <div className="h-full">Logo</div>
        <div className="h-full flex list-none mr-5 gap-5">
          <div>About</div>
          <div>Home</div>
          <div>Contact Us</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
