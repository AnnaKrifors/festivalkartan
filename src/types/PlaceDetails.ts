import type Image from "./Image";

type LocationDetails = {
  preface: string;
  body: string;
  contactInfo: ContactInfo;
  location: string;
  distanceToTrainStation: string;
  enviromentCertification?: boolean; // I know this is a typo, but it's in the API
  hotelStars: "Inga" | "1" | "2" | "3" | "4" | "5";
  image: Image;
  video: Video;
};

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

export default LocationDetails;
