<script lang="ts">
  import Map from "./lib/Map.svelte";
  import Modal from "./lib/Modal/Modal.svelte";
  import { setCurrentPlace, unsetCurrentPlace } from "./utils/marker";
  import { placesStore } from "./data/places";

  window.addEventListener("popstate", () => {
    const matchedPlace = $placesStore.find((place) => {
      const formattedTitle = place.postTitle.toLowerCase();

      const formattedURL = decodeURIComponent(window.location.href)
        .substring(
          decodeURIComponent(window.location.href).indexOf("?place=") + 7,
        )
        .toLowerCase();

      return formattedURL === formattedTitle;
    });
    matchedPlace ? setCurrentPlace(matchedPlace) : unsetCurrentPlace(true);
  });
</script>

<main id="main" class="h-full">
  <Map />
  <Modal />
</main>

<style>
</style>
