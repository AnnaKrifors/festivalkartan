import type { Place } from "../types/Place";
import { unsetCurrentPlace } from "./marker";

export function handlePlaceClick(place: Place) {
  if (place.postTitle) {
    const encodedSlug = encodeURIComponent(
      place.postTitle.replace(/\s+/g, " "),
    );
    window.history.pushState({}, "", `/?place=${encodedSlug}`);
  } else {
    console.error("placeTitle är inte definierat för platsen.");
  }
}

export function handleBackClick(locationReset: boolean) {
  unsetCurrentPlace(locationReset);
  window.history.pushState({}, "", "/");
}
