<script lang="ts">
  import maplibregl from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";
  import { onDestroy, onMount } from "svelte";
  import { mapStore } from "../data/map";
  import { placesStore } from "../data/places";
  import { addMarkers } from "../utils/marker";
  import { createAnimatedMarker } from "./AnimatedMarker.svelte";

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
              tiles: [
                "https://visitvasteras.se/app/themes/visit-vasteras/3d-map/tiles/{z}/{x}/{y}.png",
              ],
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
          [16.471318098036782, 59.58591871958956],
          [16.619577204640287, 59.63565020308816],
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
  }

  onMount(() => {
    createMap();

    createAnimatedMarker(
      $mapStore,
      [16.555924415587867, 59.60907242440322],
      [16.553317308425477, 59.60786745607393],
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
  <div class="attribution absolute bottom-0 right-0 rounded-sm">
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
