<script lang="ts">
  import { miscFilterMarkerIcon } from "../../assets/svgMarkers";
  import { filterStore, placesStore } from "../../data/places";
  import { MarkerType } from "../../types/Place";
  import { getIconByType } from "../../utils/marker";

  let filters: MarkerType[] = ["scene", "funfair", "misc"];

  placesStore.subscribe((places) => {
    if (filters.length > 0) {
      return;
    }
    const uniqueMarkerTypes = new Set<MarkerType>();
    for (const place of places) {
      if (!uniqueMarkerTypes.has(place.markerType)) {
        uniqueMarkerTypes.add("misc");
      }
    }
    filters = Array.from(uniqueMarkerTypes);
  });

  const handleFilterChange = (event: Event) => {
    //filter that's used for the miscCategory.
    const miscFilter = Object.keys(MarkerType).filter(
      (marker) => !["scene", "funfair"].includes(marker),
    );

    filterStore.update((filters) => {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        if (target.value === "scene") {
          return [...filters, target.value, "pride"];
        }
        if (target.value === "misc") {
          return [...filters, ...miscFilter];
        }
        //adds other filters thats not checked.
        return [...filters, target.value];
      }
      if (target.value === "scene") {
        return filters.filter(
          (filter) => filter !== "scene" && filter !== "pride",
        );
      }
      if (target.value === "misc") {
        return filters.filter((filter) => !miscFilter.includes(filter));
      }
      //removes other filters that arent checked.
      return filters.filter((filter) => filter !== target.value);
    });
  };
</script>

<fieldset class="mb-5 mt-2 grid grid-cols-3 justify-start gap-3">
  <legend class="sr-only">Filter</legend>
  {#each filters as filter}
    <label
      class="group relative flex flex-col items-center gap-1 overflow-hidden pt-2 text-sm text-[#003E4A]"
    >
      <div
        class="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white p-2 transition group-focus-within:ring-2 group-focus-within:ring-[#003E4A] group-focus-within:ring-offset-2 group-focus-within:ring-offset-white
       lg:h-16 lg:w-16
         lg:hover:bg-[#F7A1A1]/30
        {$filterStore.includes(filter) ? 'checked' : ''}"
        aria-hidden="true"
      >
        {#if filter === "misc"}
          {@html miscFilterMarkerIcon()}
        {:else}
          {@html getIconByType(filter)}
        {/if}
      </div>

      <div class="grow overflow-auto break-all text-center" aria-hidden="true">
        {MarkerType[filter]}
      </div>
      <input
        id={filter}
        aria-label={MarkerType[filter]}
        class="absolute ml-auto appearance-none p-1 outline-none"
        type="checkbox"
        value={filter}
        checked={$filterStore.includes(filter)}
        on:change={handleFilterChange}
      />
    </label>
  {/each}
</fieldset>

<style>
  .checked {
    background-color: #f7a1a1 !important;
  }
  div {
    -webkit-tap-highlight-color: transparent;
  }
</style>
