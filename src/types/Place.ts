import type { Image } from "./Image";

export type Facility = {
  name: string;
  capacity: number;
  unit: string;
};

export enum Category {
  stage = "Scen",
  entrance = "Entré",
  important = "Viktigt",
  other = "Övrigt",
}

export type PinType =
  | "scene"
  | "entrance"
  | "funfair"
  | "market"
  | "pride"
  | "safetytent"
  | "wristband"
  | "red-cross"
  | "toilets"
  | "drink-water"
  | "entrance-fee";

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
  pinType: PinType;
  pinInfo?: {
    pinNumber?: string;
    ageLimit?: number;
  };
};
