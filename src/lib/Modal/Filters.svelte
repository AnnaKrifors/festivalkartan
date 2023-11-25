<script lang="ts">
  import { filterStore, placesStore } from "../../data/places";
  import Icon from "../Icon.svelte";

  let filters: string[] = [];
  placesStore.subscribe((places) => {
    if (filters.length > 0) {
      return;
    }
    const uniqueFacilities = new Set<string>();
    for (const place of places) {
      for (const facility of place.facilities) {
        uniqueFacilities.add(facility.name);
      }
    }
    filters = Array.from(uniqueFacilities).filter(
      (filter) => !["Grupprum", "Konferensrum"].find((item) => filter === item),
    );
  });

  const handleFilterChange = (event: Event) => {
    filterStore.update((filters) => {
      const target = event.target as HTMLInputElement;
      if (target.checked) {
        return [...filters, target.value];
      }
      return filters.filter((filter) => filter !== target.value);
    });
  };
</script>

<fieldset
  class="mb-5 grid grid-cols-2 justify-start gap-3 xl:grid-cols-4"
  aria-label="filter"
>
  {#each filters as filter}
    <label
      class="relative flex cursor-pointer items-center gap-2 border border-[#003E4A]/70 bg-white p-2 text-sm font-semibold text-[#003E4A] transition focus-within:ring-2 focus-within:ring-[#003E4A] focus-within:ring-offset-2 focus-within:ring-offset-white hover:bg-[#F7A1A1]/30"
      for={filter}
    >
      <Icon className="h-5 w-5 flex-none" name={filter} />
      <span class="grow">
        {filter}
      </span>
      <input
        id={filter}
        class="peer absolute ml-auto appearance-none p-1"
        type="checkbox"
        value={filter}
        checked={$filterStore.includes(filter)}
        on:change={handleFilterChange}
      />
      <span class="invisible h-4 w-5 flex-none peer-checked:visible">
        <svg
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 16 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-100 h-100"
        >
          <path
            d="M5.81278 10.2363L0.567383 5.4962L1.87873 4.31117L5.81278 7.86627L14.256 0.236328L15.5674 1.42136L5.81278 10.2363Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </label>
  {/each}
</fieldset>

<style>
  label:has(input:checked) {
    background-color: #f7a1a1 !important;
  }
</style>
