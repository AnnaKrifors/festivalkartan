import { writable, type Writable } from "svelte/store";
import type Place from "../types/Place";
import { get } from "./fetch";

const fetchPlaces = async () => {
  const response: Place[] = await get("/meetings");
  for (const place of response) {
    place.selected = false;
  }
  return response;
};

/**
 * filters `placesStore`
 *  by the given facility names
 */
export const filterStore: Writable<string[]> = writable([]);

export const placesStore: Writable<Place[]> = writable([]);
fetchPlaces().then((places) => placesStore.set(places));

export const currentPlace: Writable<Place> = writable(null);

filterStore.subscribe((filters) => {
  placesStore.update((places) => {
    for (const place of places) {
      // place is hidden if it doesn't have all facility names in `filters`
      // and the capacity of that facility is over 0
      place.hidden = !filters.every((filter) =>
        place.facilities.some(
          (facility) => facility.capacity > 0 && facility.name === filter,
        ),
      );
    }
    return places;
  });
});
