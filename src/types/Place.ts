import type { Image } from "./Image";

export enum Category {
  stage = "Scen",
  entrance = "Entré",
  important = "Viktigt",
  other = "Övrigt",
}

export const MarkerType = {
  scene: "Scen",
  entrance: "Entré",
  funfair: "Nöjesfält",
  market: "Marknad",
  pride: "Pride",
  safetytent: "Trygghetstält",
  wristband: "Festivalarmband",
  toilet: "Toalett",
  "drink-water": "Dricksvatten",
  "red-cross": "Röda Korset",
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
  videoOnTop: boolean;
  category: Category;
  markerType: MarkerType;
  markerInfo?: {
    markerNumber?: string;
    ageLimit?: number;
  };
};
