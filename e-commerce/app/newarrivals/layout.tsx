import React from "react";
import Newarrivalsnavbar from "../components/newarrivalsnavbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Newarrivalsnavbar />
      {children}
    </div>
  );
}
