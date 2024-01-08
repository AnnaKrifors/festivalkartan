import type { Image } from "./Image";

export type Video = {
  source: string;
  description: string;
  type: "iframe" | "video/mp4" | "video/webm";
};

type OpenHours = {
  time_open: Date;
  time_close: Date;
};

export type PlaceDetails = {
  ID: number;
  preface: string;
  body: string;
  location: string;
  image: Image;
  video?: Video;
  open_hours: [OpenHours];
  age_limit?: number;
  entrance_fee?: boolean;
  program_link?: string;
  adress?: string;
};
