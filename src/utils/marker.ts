import maplibregl, { Map, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { mapStore } from "../data/map";
import { currentPlace } from "../data/places";
import { MarkerType, type Place } from "../types/Place";
import { handlePlaceClick } from "./url";
import {
  entranceIcon,
  funfairIcon,
  defaultMarker,
  marketIcon,
  prideIcon,
  redcrossIcon,
  safetytentIcon,
  sceneAreasIcon,
  toiletIcon,
  waterIcon,
  wristBandIcon,
  markerLabel,
  prideParadeIcon,
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
  marginTop: "-17px",
};

const selectedMarkerStyle = {
  height: "40px",
  zIndex: 3,
};

const deselectedMarkerStyle = {
  height: "35px",
  zIndex: 1,
};

export function addMarkers(places: Place[]) {
  removeMarkers();

  const unhiddenPlaces = places.filter((place) => !place.hidden);
  for (const place of unhiddenPlaces) {
    if (!place.coordinates) continue;
    const el = document.createElement("div");
    el.innerHTML += defaultMarker();
    el.innerHTML += getIconByType(place.markerType);

    el.id = place.ID.toString();
    el.className =
      "map-marker hover:drop-shadow-markerShadow flex justify-center items-center";
    el.innerHTML += markerLabel(MarkerType[place.markerType]);

    Object.keys(markerStyle).forEach((key) => {
      // @ts-ignore - TS doesn't like this, but it works,
      // and I won't waste my time on doing it properly
      el.closest(".map-marker").style[key] = markerStyle[key];
    });
    el.querySelector(".marker-icon")?.classList.add("marker-icon-style");
    let marker = new maplibregl.Marker(el)
      .setLngLat([place.coordinates.longitude, place.coordinates.latitude])
      .addTo(map);

    let markerEl = marker.getElement();
    markerEl.addEventListener("click", () => {
      setCurrentPlace(place);
      handlePlaceClick(place);
    });
    markers.push(marker);
  }
}

export function getIconByType(currMarker: MarkerType) {
  if (currMarker === "pride") {
    return prideIcon();
  }
  if (currMarker === "scene") {
    return sceneAreasIcon();
  }
  if (currMarker === "wristband") {
    return wristBandIcon();
  }
  if (currMarker === "toilet") {
    return toiletIcon();
  }
  if (currMarker === "entrance") {
    return entranceIcon();
  }
  if (currMarker === "drinkWater") {
    return waterIcon();
  }
  if (currMarker === "redCross") {
    return redcrossIcon();
  }
  if (currMarker === "market") {
    return marketIcon();
  }
  if (currMarker === "funfair") {
    return funfairIcon();
  }
  if (currMarker === "safetytent") {
    return safetytentIcon();
  }
  if (currMarker === "prideparade") {
    return prideParadeIcon();
  }
  return defaultMarker();
}

function getMapOffset() {
  const modal = document.getElementById("modal")?.getClientRects()[0];
  const root = document.getElementById("main")?.getClientRects()[0];
  if (!modal || !root) return { bottom: 0, top: 0, right: 0, left: 0 };
  const modalHeight = root.height * 0.83;
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
  const currEl = document.getElementById(current.ID.toString());

  if (currEl !== null && currEl !== undefined) {
    currEl.classList.add("drop-shadow-markerShadow");
    Object.keys(selectedMarkerStyle).forEach((key) => {
      // @ts-ignore - TS doesn't like this, but it works,
      // and I won't waste my time on doing it properly
      currEl.closest(".map-marker").style[key] = selectedMarkerStyle[key];
    });
    currEl.querySelector(".main-marker")?.setAttribute("fill", "#E9425C");
  }

  map.flyTo({
    center: [place.coordinates.longitude, place.coordinates.latitude],
    padding: getMapOffset(),
    zoom: 14,
  });
}
function zoomMarkerBounds() {
  let bounds = new maplibregl.LngLatBounds();
  markers.forEach((marker) => bounds.extend(marker.getLngLat()));
  map.fitBounds(bounds);
}

export function unsetCurrentPlace() {
  if (!current) return;
  const currEl = document.getElementById(current.ID.toString());

  if (currEl !== null && currEl !== undefined) {
    currEl.classList.remove("drop-shadow-markerShadow");

    Object.keys(deselectedMarkerStyle).forEach((key) => {
      // @ts-ignore - TS doesn't like this, but it works,
      // and I won't waste my time on doing it properly
      currEl.closest(".map-marker").style[key] = deselectedMarkerStyle[key];
    });
    currEl.querySelector(".main-marker")?.setAttribute("fill", "#F4F3F1");
  }

  currentPlace.set(null);
  zoomMarkerBounds();
}

function removeMarkers() {
  markers.forEach((marker) => marker.remove());
  markers = [];
}
