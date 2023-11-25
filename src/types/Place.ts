import type { Image } from "./Image";

export type Place = {
  ID: number;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  facilities: Facility[];
  images: Image[];
  post_title: string;
  selected?: boolean;
  hidden?: boolean;
  videoOnTop: boolean;
};

export type Facility = {
  name: string;
  capacity: number;
  unit: string;
};
