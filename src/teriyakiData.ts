import L from "leaflet";

import data from "./rawData.json";

export type TeriyakiStore = {
  number: number;
  name: string;
  coords: L.LatLngExpression;
  youtubeLink: string;
  googleMapsLink: string;
  summary: Array<string>;
};

export const STORES: TeriyakiStore[] = data.map((store: any) => {
  return {
    ...store,
    coords: store.coords.split(",").map(Number), // The coords get parsed as a string like "123, 456" but our data wants it like [123, 456]
    summary: store.summary.split(/\r?\n/), // The summary comes as a single string separated by newlines
  };
});
