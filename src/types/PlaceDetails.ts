export type Video = {
  source: string;
  description: string;
  type: "iframe" | "video/mp4" | "video/webm";
};

export type PlaceDetails = {
  ID: number;
  preface: string;
  body: string;
  video?: Video;
  otherInfo?: string;
  buttonDetails?: {
    buttonText: string;
    url: string;
  };
};
