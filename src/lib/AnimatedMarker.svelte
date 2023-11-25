<script context="module" lang="ts">
  import * as turf from "@turf/turf";
  import maplibregl, { Map, type LngLatLike } from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";

  export function createAnimatedMarker(
    map: Map,
    startLngLat: LngLatLike,
    endLngLat: LngLatLike,
    imagePath: string,
    imageWidth: number,
    imageRatio: number,
    steps: number,
    maxZoom: number,
    animationType: "loop" | "loopInOut",
  ): void {
    let movingMarker;
    const startPosition: LngLatLike = startLngLat;
    const route = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [startPosition, endLngLat],
          },
        },
      ],
    };
    const feature: any = route.features[0];

    const el = document.createElement("div");
    el.style.backgroundImage = `url(${imagePath})`;
    el.style.backgroundSize = "contain";
    el.style.opacity = "0";
    setImageSize(el, map, imageWidth, imageRatio);

    movingMarker = new maplibregl.Marker(el)
      .setLngLat(startPosition)
      .addTo(map);

    const lineDistance = turf.length(feature, {});
    const line = turf.lineString(feature.geometry.coordinates);

    for (let i = 0; i < lineDistance; i += lineDistance / steps) {
      const segment = turf.along(line, i);
      feature.geometry.coordinates.push(segment.geometry.coordinates);
    }

    function setVisibility() {
      const zoomLevel = map.getZoom();
      if (zoomLevel < maxZoom) {
        el.style.display = "none";
      } else {
        setImageSize(el, map, imageWidth, imageRatio);
        el.style.display = "initial";
      }
    }

    setTimeout(() => {
      moveMarker(0, steps, feature, el, movingMarker, animationType);
      setVisibility();
    }, 500);

    map.on("zoom", function () {
      setVisibility();
    });
  }

  function setImageSize(element, map, width, ratio): void {
    const zoomLevel = map.getZoom();
    const variable = width ** (zoomLevel / 7);
    const tempWidth = variable;
    element.style.width = `${tempWidth}px`;
    element.style.height = `${tempWidth * ratio}px`;
  }

  function loop(
    counter: number,
    steps: number,
    feature: any,
    el: HTMLDivElement,
    movingMarker?: maplibregl.Marker,
    animationType?: "loop" | "loopInOut",
  ): void {
    if (counter < steps) {
      requestAnimationFrame(() => {
        moveMarker(counter, steps, feature, el, movingMarker, animationType);
        if (counter < 101) {
          el.style.opacity = `${counter / 100}`;
        } else if (steps - counter < 101) {
          el.style.opacity = `${(steps - counter) / 100}`;
        } else {
          el.style.opacity = "1";
        }
      });
    } else {
      moveMarker(0, steps, feature, el, movingMarker, animationType);
    }
  }

  function loopInOut(
    counter: number,
    steps: number,
    feature: any,
    el: HTMLDivElement,
    movingMarker: maplibregl.Marker,
    animationType: "loop" | "loopInOut",
    loopIn: boolean,
  ): void {
    if (counter < steps) {
      requestAnimationFrame(() => {
        moveMarker(
          counter,
          steps,
          feature,
          el,
          movingMarker,
          animationType,
          loopIn,
        );
        if (counter < 101 && loopIn) {
          el.style.opacity = `${counter / 100}`;
        } else if (steps - counter < 101 && !loopIn) {
          el.style.opacity = `${(steps - counter) / 100}`;
        } else {
          el.style.opacity = "1";
        }
      });
    } else {
      setTimeout(() => {
        const newFeature = {
          ...feature,
          geometry: {
            ...feature.geometry,
            coordinates: feature.geometry.coordinates.reverse(),
          },
        };
        moveMarker(
          0,
          steps,
          newFeature,
          el,
          movingMarker,
          animationType,
          !loopIn,
        );
      }, 8000);
    }
  }

  function moveMarker(
    counter: number,
    steps: number,
    feature: any,
    el: HTMLDivElement,
    movingMarker?: maplibregl.Marker,
    animationType?: "loop" | "loopInOut",
    loopIn: boolean = animationType === "loopInOut",
  ): void {
    const roundedCounter =
      Math.round(counter) < steps ? Math.round(counter) : steps;
    const long = feature.geometry.coordinates[roundedCounter][0];
    const lat = feature.geometry.coordinates[roundedCounter][1];

    movingMarker.setLngLat([long, lat]);

    counter = counter + 1;

    if (animationType === "loopInOut") {
      loopInOut(
        counter,
        steps,
        feature,
        el,
        movingMarker,
        animationType,
        loopIn,
      );
    }

    if (animationType === "loop") {
      loop(counter, steps, feature, el, movingMarker, animationType);
    }
  }
</script>
