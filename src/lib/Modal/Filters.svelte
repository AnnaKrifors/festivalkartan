<script lang="ts">
  import { filterStore, placesStore } from "../../data/places";
  import { MarkerType } from "../../types/Place";
  import { getIconByType } from "../../utils/marker";

  let filters: MarkerType[] = [];

  placesStore.subscribe((places) => {
    if (filters.length > 0) {
      return;
    }
    const uniqueMarkerTypes = new Set<MarkerType>();
    for (const place of places) {
      uniqueMarkerTypes.add(place.markerType);
    }
    filters = Array.from(uniqueMarkerTypes).filter(
      (filter) =>
        ![
          "market",
          "entrance",
          "pride",
          "safetytent",
          "wristband",
          "drinkWater",
          "redCross",
          "prideparade",
          "foodcourt",
        ].find((item) => filter === item),
    );
  });
  const handleFilterChange = (event: Event) => {
    filterStore.update((filters) => {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        return target.value === "scene"
          ? [...filters, target.value, "pride"]
          : [...filters, target.value];
      }
      return target.value === "scene"
        ? filters.filter((filter) => filter !== "scene" && filter !== "pride")
        : filters.filter((filter) => filter !== target.value);
    });
  };
</script>

<fieldset
  class="mb-5 mt-2 grid grid-cols-3 justify-start gap-3"
  aria-label="filter"
>
  {#each filters as filter}
    <label
      class="group relative flex cursor-pointer flex-col items-center gap-1 overflow-hidden pt-2 text-sm text-[#003E4A]
     "
      for={filter}
    >
      <div
        class="flex h-14 w-14
        items-center justify-center rounded-full bg-white p-2
        transition group-focus-within:ring-2 group-focus-within:ring-[#003E4A] group-focus-within:ring-offset-2 group-focus-within:ring-offset-white
       lg:h-16 lg:w-16
         lg:hover:bg-[#F7A1A1]/30
        {$filterStore.includes(filter) ? 'checked' : ''}"
      >
        {@html getIconByType(filter)}
      </div>

      <span class="grow overflow-auto break-all text-center">
        {MarkerType[filter]}
      </span>
      <input
        id={filter}
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
  label {
    -webkit-tap-highlight-color: transparent;
  }
</style>
