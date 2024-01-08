import { writable, type Writable } from "svelte/store";
import type { Place } from "../types/Place";
import { get } from "./fetch";

const fetchPlaces = async () => {
  const response = await get<Place[]>();

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

export const currentPlace: Writable<Place | null> = writable(null);

filterStore.subscribe((filters) => {
  placesStore.update((places) => {
    for (const place of places) {
      if (filters.length === 0) {
        place.hidden = false;
      } else {
        place.hidden = !filters.some((filter) => place.marker_type === filter);
      }
    }
    return places;
  });
});
