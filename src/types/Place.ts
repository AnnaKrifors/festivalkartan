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
  drink_water: "Dricksvatten",
  red_cross: "Röda Korset",
} as const;

export type MarkerType = keyof typeof MarkerType;

export type Place = {
  ID: number;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  images: Image[];
  post_title: string;
  selected?: boolean;
  hidden?: boolean;
  video_on_top: boolean;
  marker_type: MarkerType;
};
