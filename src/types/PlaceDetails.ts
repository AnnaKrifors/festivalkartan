import type { Image } from "./Image";

export type Video = {
  source: string;
  description: string;
  type: "iframe" | "video/mp4" | "video/webm";
};

export type ContactInfo = {
  address: string;
  phone: string;
  web: string;
};

type Program = {
  artist: string;
  date: Date;
  description: string;
};

export type FestivalPlaceDetails = {
  ID: number;
  preface: string;
  body: string;
  location: string;
  image: Image;
  video?: Video;
  program?: Program[];
};
