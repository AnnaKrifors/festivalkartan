import type { Image } from "./Image";

export type Video = {
  source: string;
  description: string;
  type: "iframe" | "video/mp4" | "video/webm";
};

export type PlaceDetails = {
  ID: number;
  preface: string;
  body: string;
  location: string;
  image: Image;
  video?: Video;
  otherInfo?: string;
  programLink?: string;
  adress?: string;
};
