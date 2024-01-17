<script lang="ts">
  import { placesStore } from "../../data/places";
  import { setCurrentPlace } from "../../utils/marker";
  import Icon from "../Icon.svelte";
  import Filters from "./Filters.svelte";
  import { handlePlaceClick } from "../../utils/url";
</script>

<div class="px-4 pb-16 md:pt-4">
  <Filters />
  <ul>
    {#each $placesStore as place}
      {#if !place.hidden}
        <li
          class="item max-w-100 mb-2 transition duration-200 hover:brightness-90"
        >
          <button
            class="flex w-full items-stretch text-left"
            on:click={() => {
              setCurrentPlace(place);
              handlePlaceClick(place);
            }}
          >
            {#if place.images}
              <img
                class="w-40 shrink-0 rounded-l-lg object-cover lg:w-60"
                src={place.images[0].url || ""}
                alt={place.images[0].alt}
              />
            {:else}
              <div class="w-40 shrink-0 bg-slate-300 lg:w-60" />
            {/if}
            <div
              class="relative flex w-full items-center justify-between rounded-r-lg bg-white p-4 text-black"
            >
              <span
                class="text-md mr-auto overflow-hidden text-ellipsis whitespace-nowrap break-all sm:text-xl md:text-2xl"
              >
                {place.postTitle}
              </span>

              <div
                class="absolute right-0 translate-x-1/2 rounded-full bg-darkgreen md:p-1"
              >
                <Icon name="arrow" className="w-6 fill-white" />
              </div>
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
