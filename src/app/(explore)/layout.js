import { SidebarDemo } from "@/components/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <SidebarDemo prop={children} />
    </div>
  );
}
