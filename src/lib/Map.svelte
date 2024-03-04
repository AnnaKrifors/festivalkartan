<script lang="ts">
  import { fetchPlaces } from "../data/places";
  import maplibregl from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";
  import { onDestroy, onMount } from "svelte";
  import { mapStore } from "../data/map";
  import { placesStore } from "../data/places";
  import { addMarkers } from "../utils/marker";
  import { createAnimatedMarker } from "./AnimatedMarker.svelte";
  import { setCurrentPlace } from "../utils/marker";
  let mapContainer: HTMLElement;

  $: addMarkers($placesStore);
  onDestroy(() => $mapStore.remove());

  function createMap(): void {
    const initialState = {
      lng: 16.54644683494181,
      lat: 59.608400285145265,
      zoom: 14,
    };

    mapStore.set(
      new maplibregl.Map({
        container: mapContainer,
        style: {
          version: 8,
          sources: {
            osm: {
              type: "raster",
              tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
              tileSize: 256,
            },
            vasteras: {
              type: "raster",
              tiles: ["/maptiles/{z}/{x}/{y}.png"],
              tileSize: 256,
              bounds: [16.509005391, 59.575299686, 16.640489282, 59.639870904],
            },
          },
          layers: [
            {
              id: "osm",
              type: "raster",
              source: "osm",
            },
            {
              id: "vasteras",
              type: "raster",
              source: "vasteras",
            },
          ],
        },
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom,
        maxZoom: 16,
        minZoom: 13,
        dragRotate: false,
        maxBounds: [
          [16.428942968510864, 59.57179838023057],
          [16.66379283148911, 59.65068173968099],
        ],
      }),
    );
    const geolocate = new maplibregl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    $mapStore.addControl(geolocate);
    $mapStore.addControl(new maplibregl.NavigationControl({}), "top-right");
    $mapStore.on("load", async function () {
      await fetchPlaces().then((places) => placesStore.set(places));

      $placesStore.forEach((place) => {
        if (window.location.href.includes(encodeURI(`${place.postTitle}`))) {
          return setCurrentPlace(place);
        }
      });
    });
    geolocate.on("outofmaxbounds", function () {
      alert("Du behöver befinna dig i västerås stad för att se din position.");
      !geolocate.trigger();
    });
    geolocate.on("error", function () {
      alert(
        "Det går inte att hitta din position just nu. Se till att appen har tillåtelse att se din position.",
      );
    });
  }

  onMount(() => {
    createMap();

    createAnimatedMarker(
      $mapStore,
      [16.55643635649808, 59.60924035520845],
      [16.55370456855319, 59.6079618546496],
      "https://visitvasteras.se/app/themes/visit-vasteras/dist/train.png",
      10,
      0.7064220183,
      700,
      16,
      "loopInOut",
    );
  });
</script>

<div class="map" bind:this={mapContainer}>
  <div class="attribution absolute bottom-0 right-0 z-50 rounded-sm">
    <a
      href="https://www.openstreetmap.org/copyright"
      target="_blank"
      rel="noreferrer">&copy; OpenStreetMap</a
    >
  </div>
</div>

<style>
  .map {
    font-family: inherit;
    width: 100vw;
    height: 100%;
  }
  .attribution {
    padding: 1px 3px;
    background-color: rgba(243, 244, 246, 0.6);
  }
</style>
