import { writable } from "svelte/store";
import type { PlaceDetails } from "../types/PlaceDetails";
import { get } from "./fetch";
import { currentPlace } from "./places";

const fetchPlaceDetails = async (id: number) => {
  const response = await get<PlaceDetails>("/meeting/" + id);
  return response;
};

const getPlaceDetails = (id: number) => {
  placeDetailsStore.update((store) => {
    store.loading = true;
    store.error = false;
    return store;
  });

  fetchPlaceDetails(id)
    .then((placeDetails) => {
      placeDetailsDictionary[id] = placeDetails;
      placeDetailsStore.update((store) => {
        store.placeDetails = placeDetails;
        store.loading = false;
        return store;
      });
    })
    .catch(() => {
      placeDetailsStore.update((store) => {
        store.error = true;
        store.loading = false;
        return store;
      });
    });
};

const placeDetailsDictionary: { [id: number]: PlaceDetails } = {};

export const placeDetailsStore = writable({
  loading: false,
  error: false,
  placeDetails: undefined as PlaceDetails | undefined,
});

currentPlace.subscribe((place) => {
  if (!place) return;
  if (!placeDetailsDictionary[place.ID]) {
    getPlaceDetails(place.ID);
  } else {
    placeDetailsStore.update((store) => {
      store.placeDetails = placeDetailsDictionary[place.ID];
      return store;
    });
  }
});
