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
  foodCourtIcon,
  miscMarkerIcon,
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
  height: "40px",
  width: "24px",
  marginTop: "-17px",
};

const selectedMarkerStyle = {
  width: "36px",
  zIndex: 3,
};

const deselectedMarkerStyle = {
  width: "24px",
  zIndex: 1,
};

export function addMarkers(places: Place[]) {
  removeMarkers();

  const unhiddenPlaces = places.filter((place) => !place.hidden);
  for (const place of unhiddenPlaces) {
    if (!place.coordinates) continue;
    const el = document.createElement("div");
    el.ariaHidden = "true";
    el.innerHTML += defaultMarker();
    el.innerHTML += getIconByType(place.markerType);

    el.id = place.ID.toString();
    el.className =
      "map-marker hover:drop-shadow-markerShadow flex justify-center items-center";
    el.innerHTML += markerLabel(place.postTitle);

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
  if (currMarker === "drinkwater") {
    return waterIcon();
  }
  if (currMarker === "redcross") {
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
  if (currMarker === "foodcourt") {
    return foodCourtIcon();
  }
  return miscMarkerIcon();
}

export function setCurrentPlace(place: Place) {
  if (current) {
    unsetCurrentPlace(true);
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

  const mapOffset = {
    Latitude: place.coordinates.latitude,
    Longitude: place.coordinates.longitude,
  };

  const windowHeight = window.innerHeight;
  const centerOffset = windowHeight * 0.25;

  if (window.innerWidth < 768) {
    // Mobile devices
    const denominator = windowHeight < 810 ? 163285 : 133285;
    mapOffset.Latitude -= centerOffset / denominator;
  } else if (window.innerWidth < 1024) {
    // Tablets
    mapOffset.Latitude -= (windowHeight * 0.28) / 143285;
  } else {
    // Desktops
    mapOffset.Longitude -= 0.004;
  }

  map.flyTo({
    center: [mapOffset.Longitude, mapOffset.Latitude],
    zoom: 18,
  });
}
function zoomMarkerBounds() {
  let bounds = new maplibregl.LngLatBounds();
  markers.forEach((marker) => bounds.extend(marker.getLngLat()));
  map.fitBounds(bounds, { padding: 50 });
}

export function unsetCurrentPlace(locationReset: boolean) {
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
  if (locationReset) {
    zoomMarkerBounds();
  }
}
function removeMarkers() {
  markers.forEach((marker) => marker.remove());
  markers = [];
}
