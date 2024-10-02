<<<<<<< HEAD
import { SidebarDemo } from "@/components/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <SidebarDemo prop={children} />
=======
import AppNavbar from "@/components/explore/Navigation";
import React from "react";
export default function layout({ children }) {
  return (
    <div>
      <div>
        <AppNavbar />
      </div>
      <div>{children}</div>
>>>>>>> a53e0fc (Authentication Added)
    </div>
  );
}
