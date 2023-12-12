import { writable } from "svelte/store";
import type { FestivalPlaceDetails } from "../types/PlaceDetails";
import { getDetails } from "./fetch";
import { currentPlace } from "./places";

const fetchPlaceDetails = async (id: number) => {
  const response = await getDetails<FestivalPlaceDetails[]>();

  const placeDetails = response.find((item) => item.ID === id);

  if (!placeDetails) {
    throw new Error(`could not find ${id} `);
  }

  return placeDetails;
};

const getPlaceDetails = (id: number) => {
  placeDetailsStore.update((store) => {
    store.loading = true;
    store.error = false;
    return store;
  });

  fetchPlaceDetails(id)
    .then((festivalPlaceDetails) => {
      placeDetailsDictionary[id] = festivalPlaceDetails;
      placeDetailsStore.update((store) => {
        store.festivalPlaceDetails = festivalPlaceDetails;
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

const placeDetailsDictionary: { [id: number]: FestivalPlaceDetails } = {};

export const placeDetailsStore = writable({
  loading: false,
  error: false,
  festivalPlaceDetails: undefined as FestivalPlaceDetails | undefined,
});

currentPlace.subscribe((place) => {
  if (!place) return;
  if (!placeDetailsDictionary[place.ID]) {
    getPlaceDetails(place.ID);
  } else {
    placeDetailsStore.update((store) => {
      store.festivalPlaceDetails = placeDetailsDictionary[place.ID];
      return store;
    });
  }
});
