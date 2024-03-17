import React, { useCallback } from "react";

import "leaflet/dist/leaflet.css";
import "./index.css";
import { Map } from "./Map";

export function App() {
  return (
    <div className="w-screen h-screen flex">
      <Map />
      {/* sidebar */}
      {/* <div className="h-full w-0"></div> */}
    </div>
  );
}
