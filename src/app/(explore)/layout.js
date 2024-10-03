import AppNavbar from "@/components/explore/Navigation";
import React from "react";
export default function layout({ children }) {
  return (
    <div>
      <div>
        <AppNavbar />
      </div>
      <div>{children}</div>
    </div>
  );
}
