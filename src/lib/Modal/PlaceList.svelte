<script lang="ts">
  import { placesStore } from "../../data/places";
  import type { Facility } from "../../types/Place";
  import { setCurrentPlace } from "../../utils/marker";
  import Icon from "../Icon.svelte";
  import Filters from "./Filters.svelte";

  const formatFacilityCapacity = (facility: Facility) => {
    if (facility.name === "Evenemangsyta") {
      return facility.name;
    }
    return `${facility.name}: ${
      facility.capacity
    } ${facility.unit.toLowerCase()}`;
  };
</script>

<div class="px-2 pb-16 pt-4">
  <Filters />
  <ul>
    {#each $placesStore as place}
      {#if !place.hidden}
        <li
          class="item max-w-100 mb-2 rounded bg-slate-200 transition duration-200 hover:brightness-90"
        >
          <button
            class="flex w-full items-stretch text-left"
            on:click={() => {
              setCurrentPlace(place);
            }}
          >
            {#if place.images}
              <img
                class="w-40 shrink-0 object-cover lg:w-60"
                src={place.images[0].url || ""}
                alt={place.images[0].alt}
              />
            {:else}
              <div class="w-40 shrink-0 bg-slate-300 lg:w-60" />
            {/if}
            <div class="bg-dark-green text-beige w-full overflow-hidden p-4">
              <div class="align-center flex overflow-hidden pb-2">
                <span
                  class="text-md vv-font mr-auto overflow-hidden text-ellipsis whitespace-nowrap break-all sm:text-xl md:text-2xl"
                >
                  {place.post_title}
                </span>
                <Icon name="chevron" className="h-4 w-4 transform rotate-90" />
              </div>
              {#each place.facilities as facility}
                {#if facility.capacity}
                  <div class="text-md flex items-center gap-2 pb-1">
                    <Icon
                      className="h-4 w-4 shrink-0"
                      color="#ffe075"
                      name={facility.name}
                    />
                    <p class="color-yellow-400 text-sm sm:text-base md:text-lg">
                      {formatFacilityCapacity(facility)}
                    </p>
                  </div>
                {/if}
              {/each}
            </div>
          </button>
        </li>
      {/if}
    {/each}
  </ul>
  <div class="flex items-center gap-3">
    <img
      src="https://visitvasteras.se/app/themes/visit-vasteras/dist/EUlogo.jpg"
      alt="EU logo"
      class="w-32"
    />
    <p class="m max-w-[40ch]">
      Västerås mötes- och evenemangskarta är framtagen med hjälp av
      EU-finansiering.
    </p>
  </div>
</div>
