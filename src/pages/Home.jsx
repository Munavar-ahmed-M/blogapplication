import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router";
function Home() {
  return (
    <div className="bg-gray-200 flex">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Home;
