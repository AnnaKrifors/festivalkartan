import maplibregl, { Map, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { mapStore } from "../data/map";
import { currentPlace } from "../data/places";
import { MarkerType, type Place } from "../types/Place";
import {
  entranceMarker,
  funfairMarker,
  defaultMarker,
  marketMarker,
  prideMarker,
  redcrossMarker,
  safetytentMarker,
  sceneAreasMarker,
  toiletMarker,
  waterMarker,
  wristBandMarker,
} from "../assets/svgMarkers";

let markers: Marker[] = [];
let map: Map;
mapStore.subscribe((value) => {
  map = value;
});

let current: Place | null;
currentPlace.subscribe((value) => {
  current = value;
});

const markerStyle = {
  width: "35px",
  height: "35px",
};

const selectedMarkerStyle = {
  zIndex: 3,
};

const deselectedMarkerStyle = {
  zIndex: 1,
};

export function addMarkers(places: Place[]) {
  removeMarkers();

  const unhiddenPlaces = places.filter((place) => !place.hidden);
  for (const place of unhiddenPlaces) {
    if (!place.coordinates) continue;
    const el = document.createElement("div");
    el.id = place.ID.toString();
    el.className = "map-marker";
    el.innerHTML = getMarkerByType(place.markerType);
    Object.keys(markerStyle).forEach((key) => {
      // @ts-ignore - TS doesn't like this, but it works,
      // and I won't waste my time on doing it properly
      el.querySelector(".marker-container").style[key] = markerStyle[key];
    });

    let marker = new maplibregl.Marker(el)
      .setLngLat([place.coordinates.longitude, place.coordinates.latitude])
      .addTo(map);

    let markerEl = marker.getElement();
    markerEl.addEventListener("click", () => {
      setCurrentPlace(place);
    });
    markers.push(marker);
  }
}

function getMarkerByType(currMarker: MarkerType) {
  if (currMarker === "pride") {
    return prideMarker(MarkerType[currMarker]);
  }
  if (currMarker === "scene") {
    return sceneAreasMarker(MarkerType[currMarker]);
  }
  if (currMarker === "wristband") {
    return wristBandMarker(MarkerType[currMarker]);
  }
  if (currMarker === "toilet") {
    return toiletMarker(MarkerType[currMarker]);
  }
  if (currMarker === "entrance") {
    return entranceMarker(MarkerType[currMarker]);
  }
  if (currMarker === "drink-water") {
    return waterMarker(MarkerType[currMarker]);
  }
  if (currMarker === "red-cross") {
    return redcrossMarker(MarkerType[currMarker]);
  }
  if (currMarker === "market") {
    return marketMarker(MarkerType[currMarker]);
  }
  if (currMarker === "funfair") {
    return funfairMarker(MarkerType[currMarker]);
  }
  if (currMarker === "safetytent") {
    return safetytentMarker(MarkerType[currMarker]);
  }
  return defaultMarker(MarkerType[currMarker]);
}

function getMapOffset() {
  const modal = document.getElementById("modal")?.getClientRects()[0];
  const root = document.getElementById("main")?.getClientRects()[0];
  if (!modal || !root) return { bottom: 0, top: 0, right: 0, left: 0 };
  const modalHeight = root.height * 0.6;
  return modal.width === root.width
    ? { bottom: modalHeight, top: 30, right: 30, left: 30 }
    : { left: modal.width, top: 40, right: 40, bottom: 40 };
}

export function setCurrentPlace(place: Place) {
  if (current) {
    unsetCurrentPlace();
  }
  currentPlace.set(place);

  if (!place.coordinates) return;

  if (!current) return;
  const currEl = document
    .getElementById(current.ID.toString())
    ?.querySelector(".marker-container");

  if (currEl !== null && currEl !== undefined) {
    ["outline", "outline-2", "outline-black", "drop-shadow-markerShadow"].map(
      (style) => currEl.classList.add(style),
    );

    Object.keys(selectedMarkerStyle).forEach((key) => {
      // @ts-ignore - TS doesn't like this, but it works,
      // and I won't waste my time on doing it properly
      currEl.closest(".map-marker").style[key] = selectedMarkerStyle[key];
    });
  }

  map.flyTo({
    center: [place.coordinates.longitude, place.coordinates.latitude],
    padding: getMapOffset(),
    zoom: 16,
  });
}
function zoomMarkerBounds() {
  let bounds = new maplibregl.LngLatBounds();
  markers.forEach((marker) => bounds.extend(marker.getLngLat()));
  map.fitBounds(bounds);
}

export function unsetCurrentPlace() {
  if (!current) return;
  const currEl = document
    .getElementById(current.ID.toString())
    ?.querySelector(".marker-container");

  if (currEl !== null && currEl !== undefined) {
    ["outline", "outline-2", "outline-black", "drop-shadow-markerShadow"].map(
      (style) => currEl.classList.remove(style),
    );

    Object.keys(deselectedMarkerStyle).forEach((key) => {
      // @ts-ignore - TS doesn't like this, but it works,
      // and I won't waste my time on doing it properly
      currEl.closest(".map-marker").style[key] = deselectedMarkerStyle[key];
    });
  }

  currentPlace.set(null);
  zoomMarkerBounds();
}

function removeMarkers() {
  markers.forEach((marker) => marker.remove());
  markers = [];
}
