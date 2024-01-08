import type { Image } from "./Image";

export const MarkerType = {
  scene: "Scen",
  entrance: "Entré",
  funfair: "Nöjesfält",
  market: "Marknad",
  pride: "Pride",
  safetytent: "Trygghetstält",
  wristband: "Festivalarmband",
  toilet: "Toalett",
  drinkWater: "Dricksvatten",
  redCross: "Röda Korset",
} as const;

export type MarkerType = keyof typeof MarkerType;

export type Place = {
  ID: number;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  images: Image[];
  postTitle: string;
  selected?: boolean;
  hidden?: boolean;
  videoOnTop: boolean;
  markerType: MarkerType;
};
