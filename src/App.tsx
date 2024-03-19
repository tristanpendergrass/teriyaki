import React, { useCallback, useState } from "react";

import "leaflet/dist/leaflet.css";
import "./index.css";
import { Map } from "./Map";
import { Youtube, Info, GitHub } from "react-feather";

export function App() {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const handleAboutClick = useCallback(() => {
    setAboutModalOpen(true);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-orange-900 text-gray-100">
      <div className="w-full flex justify-center items-center border-b-2 border-gray-900 px-4 relative">
        <div className="py-4 flex flex-col items-center justify-center ">
          <div className="text-xs">J. Kenji López Alt's</div>
          <h1 className="text-2xl">
            <span className="italic">
              <span className="font-bold">All </span>
              <span>the </span>
              <span className="font-bold">Teriyaki </span>
              <span>in </span>
              <span className="font-bold">Seattle</span>
            </span>
          </h1>
        </div>
        <div className="absolute right-0 h-full flex flex-col lg:flex-row items-center justify-center gap-2 pr-2 lg:pr-4 lg:gap-4">
          <a
            className="flex items-center gap-1 hover:underline"
            href="https://www.youtube.com/@JKenjiLopezMain"
            target="_blank"
          >
            <Youtube size="16" />
            <span className="hidden lg:inline-block">Youtube</span>
          </a>
          <a
            className="flex items-center gap-1 hover:underline"
            href="https://github.com/tristanpendergrass/teriyaki"
            target="_blank"
          >
            <GitHub size="16" />
            <span className="hidden lg:inline-block">GitHub + About</span>
          </a>
        </div>
      </div>
      <div className="flex-grow">
        <Map />
      </div>
    </div>
  );
}
