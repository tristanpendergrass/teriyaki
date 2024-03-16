import L from "leaflet";

import data from "./rawData.json";

export type TeriyakiStore = {
  number: number;
  name: string;
  coords: L.LatLngExpression;
  youtubeLink: string;
  googleMapsLink: string;
};

export const STORES: TeriyakiStore[] = data.map((store: any) => {
  return {
    ...store,
    coords: JSON.parse(store.coords), // The coords get parsed as a string like "[123, 456]" but our data wants it like [123, 456]
  };
});
