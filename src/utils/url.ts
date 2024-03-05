import type { Place } from "../types/Place";
import { unsetCurrentPlace } from "./marker";

export function handlePlaceClick(place: Place) {
  if (place.postTitle) {
    const url = new URL(window.location.href);

    url.searchParams.set("place", place.postTitle);

    window.history.pushState({ path: url.href }, "", url.href);
  } else {
    console.error("placeTitle är inte definierat för platsen.");
  }
}
export function handleBackClick(locationReset: boolean) {
  unsetCurrentPlace(locationReset);

  const url = new URL(window.location.href);
  url.searchParams.delete("place");

  window.history.pushState({}, "", url.pathname);
}
