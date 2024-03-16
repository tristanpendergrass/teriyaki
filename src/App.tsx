import React, { useCallback } from "react";
// import "leaflet.markercluster";
// import "leaflet.markercluster/dist/MarkerCluster.css";
// import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./index.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { type TeriyakiStore, STORES } from "./teriyakiData";

import { ExternalLink } from "react-feather";

const markerBlack = `
<svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" fill-rule="evenodd" d="M11.291 21.706 12 21l-.709.706zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063a47.708 47.708 0 0 1-1.04-1.106 49.562 49.562 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8 4.408 0 8 3.461 8 8 0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a49.583 49.583 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006L12 21zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd"/></svg>
`;
export function App() {
  const handleMarkerClick = useCallback(() => {}, []);
  return (
    <div className="w-screen h-screen flex">
      <MapContainer
        center={[47.6094054, -122.34183801]}
        zoom={13}
        className="h-full flex-grow"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
        <>
          {STORES.map((store: TeriyakiStore) => {
            return (
              <Marker
                position={store.coords}
                eventHandlers={{
                  click: handleMarkerClick,
                }}
                icon={L.divIcon({
                  html: markerBlack,
                  className: "border-0 min-w-8 min-h-8 margin-left-[-8px]",
                })}
              >
                <Popup>
                  <div className="font-bold">
                    #{store.number}: {store.name}
                  </div>
                  <div>
                    <a href={store.youtubeLink} target="_blank">
                      <div className="flex items-center gap-1">
                        <ExternalLink size={12} display="inline" />
                        <div className="leading-normal">Kenji's video</div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href={store.googleMapsLink} target="_blank">
                      <div className="flex items-center gap-1">
                        <ExternalLink size={12} display="inline" />
                        <div className="leading-normal">Google Maps</div>
                      </div>
                    </a>
                  </div>
                  <ul className="list-disc ml-4">
                    {store.summary.map((line) => (
                      <li>{line}</li>
                    ))}
                  </ul>
                </Popup>
              </Marker>
            );
          })}
        </>
      </MapContainer>
      {/* sidebar */}
      {/* <div className="h-full w-0"></div> */}
    </div>
  );
}
