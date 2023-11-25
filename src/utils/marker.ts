import maplibregl, { Map, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { mapStore } from "../data/map";
import { currentPlace } from "../data/places";
import type Place from "../types/Place";

let markers: Marker[] = [];
let map: Map;
mapStore.subscribe((value) => {
  map = value;
});

let current: Place;
currentPlace.subscribe((value) => {
  current = value;
});

const markerStyle = {
  width: "24px",
  height: "31px",
  marginTop: "-15px",
  zIndex: 1,
};
const selectedMarkerStyle = {
  width: "34px",
  height: "41px",
  marginTop: "-20px",
  zIndex: 3,
};

export function addMarkers(places: Place[]): void {
  removeMarkers();

  const unhiddenPlaces = places.filter((place) => !place.hidden);
  for (const place of unhiddenPlaces) {
    if (!place.coordinates) continue;
    const el = document.createElement("div");
    el.id = place.ID.toString();
    el.className = "map-pin";
    el.innerHTML = markerSvg(place.post_title);
    Object.keys(markerStyle).forEach((key) => {
      el.style[key] = markerStyle[key];
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

function getMapOffset(): any {
  const modal = document.getElementById("modal").getClientRects()[0];
  const root = document.getElementById("main").getClientRects()[0];
  const modalHeight = root.height * 0.6;
  return modal.width === root.width
    ? { bottom: modalHeight, top: 30, right: 30, left: 30 }
    : { left: modal.width, top: 40, right: 40, bottom: 40 };
}

export function setCurrentPlace(place: Place): void {
  if (current) {
    unsetCurrentPlace();
  }

  currentPlace.set(place);

  if (!place.coordinates) return;
  const newEl = document.getElementById(place.ID.toString());
  newEl.innerHTML = currentMarkerSvg(place.post_title);
  Object.keys(selectedMarkerStyle).forEach((key) => {
    newEl.style[key] = selectedMarkerStyle[key];
  });

  map.flyTo({
    center: [place.coordinates.longitude, place.coordinates.latitude],
    padding: getMapOffset(),
    zoom: 16,
  });
}
function zoomMarkerBounds(): void {
  let bounds = new maplibregl.LngLatBounds();
  markers.forEach((marker) => bounds.extend(marker.getLngLat()));
  map.fitBounds(bounds);
}

export function unsetCurrentPlace() {
  if (!current) return;
  const currEl = document.getElementById(current.ID.toString());
  if (currEl) {
    currEl.innerHTML = markerSvg(current.post_title);
    Object.keys(markerStyle).forEach((key) => {
      currEl.style[key] = markerStyle[key];
    });
  }
  currentPlace.set(null);
  zoomMarkerBounds();
}

function removeMarkers(): void {
  markers.forEach((marker) => marker.remove());
  markers = [];
}

const markerSvg = (title: string) => `
<div class="pin-label absolute left-1/2 transform -translate-x-1/2 -translate-y-full text-center text-sm whitespace-nowrap bg-slate-100 p-1 border-2 border-[#003E4A] rounded">${title}</div>
<svg
  viewBox="29 19 56 69"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M82 44.924C82 47.3495 81.1181 50.4905 79.4855 54.1333C77.8729 57.7311 75.6242 61.6101 73.1108 65.4502C68.0868 73.1264 62.1381 80.4474 58.4909 84.7467C57.7274 85.6381 56.2726 85.6381 55.5091 84.7467C51.8619 80.4474 45.9132 73.1264 40.8892 65.4502C38.3758 61.6101 36.1271 57.7311 34.5146 54.1333C32.8819 50.4905 32 47.3495 32 44.924C32 32.1435 43.0553 21.5219 57 21.5219C70.9447 21.5219 82 32.1435 82 44.924Z"
    fill="#E4F1F4"
    stroke="#003E4A"
    stroke-width="5"
  />
  <path
    d="M64.5943 42.1472C64.5943 46.4765 61.0824 49.9862 56.7502 49.9862C52.418 49.9862 48.906 46.4765 48.906 42.1472C48.906 37.8179 52.418 34.3082 56.7502 34.3082C61.0824 34.3082 64.5943 37.8179 64.5943 42.1472Z"
    fill="#003E4A"
  />
  <path
    d="M64.5943 42.1472C64.5943 46.4765 61.0824 49.9862 56.7502 49.9862C52.418 49.9862 48.906 46.4765 48.906 42.1472C48.906 37.8179 52.418 34.3082 56.7502 34.3082C61.0824 34.3082 64.5943 37.8179 64.5943 42.1472Z"
    stroke="#7CCCBF"
  />
</svg>
`;

const currentMarkerSvg = (title: string) => `
<div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-full text-center text-sm whitespace-nowrap bg-slate-100 p-1 border-2 border-[#003E4A] rounded">${title}</div>
<svg viewBox="23 0 74 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M94.2803 33.7133C94.2803 37.0136 93.0541 41.208 90.854 45.9849C88.6754 50.7151 85.6451 55.7994 82.2709 60.8164C75.5255 70.846 67.5452 80.4028 62.6585 86.0085C61.2982 87.5565 58.7019 87.5565 57.3416 86.0085C52.4549 80.4028 44.4745 70.846 37.7291 60.8164C34.3549 55.7994 31.3246 50.7151 29.146 45.9849C26.946 41.208 25.7197 37.0136 25.7197 33.7133C25.7197 16.6819 40.8656 2.5 60 2.5C79.1344 2.5 94.2803 16.6819 94.2803 33.7133Z" fill="#F2827F" stroke="#003E4A" stroke-width="5"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.6927 15.0814L55.3881 15.0814L55.388 15.0814L49.3428 15.0814V15.0834L70.1692 15.0834V15.0814L77.5193 15.0814V22.4315L71.5922 22.4315H77.5194V22.4316H84.5768V29.7817H84.5767H77.5194V29.7817H84.5768V37.1317V44.4817L77.5193 44.4817V51.8318H72.1612H70.1692H64.2419L64.2419 59.1837H64.0429V66.5318H64.0428H56.6928V59.1837H55.3882H55.388V59.1818H49.3428V51.8318H55.388V51.8318H49.3428H48.0488H41.9927V44.4817V43.0749H35.4233V37.1317V35.7249V29.7817H40.5699V29.7817H35.4234H35.4233V22.4316H40.5699V22.4315H47.4798V22.4315H41.9927L41.9927 15.0814L49.3428 15.0814V7.73145L55.388 7.73145V7.73145L62.7381 7.73145V15.0814H56.6928H56.6927ZM71.592 59.1818H64.242L64.242 51.8318H71.592V59.1818ZM70.0884 15.0814H70.0884V7.73145L62.7384 7.73145V15.0814L70.0884 15.0814Z" fill="#F2827F"/>
    <circle cx="59.6812" cy="27.5265" r="10.0157" fill="#003E4A"/>
    <circle cx="59.6812" cy="27.5265" r="10.0157" stroke="#F2827F"/>
    <circle cx="60.0001" cy="26.6397" r="10.4913" fill="#003E4A"/>
    <circle cx="60.0001" cy="26.6397" r="10.4913" stroke="#F2827F"/>
  </svg>

`;
