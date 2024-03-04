<script lang="ts">
  import { placesStore } from "../../data/places";
  import { setCurrentPlace } from "../../utils/marker";
  import Icon from "../Icon.svelte";
  import Filters from "./Filters.svelte";
  import { handlePlaceClick } from "../../utils/url";
</script>

<div class="px-4 pb-16 md:px-8">
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
              class="group relative flex w-full items-center justify-between rounded-r-lg bg-white p-4 text-black"
            >
              <span
                class="text-md mr-auto overflow-auto font-medium uppercase sm:text-xl md:text-2xl"
                style="word-break: break-word; hyphens: auto;"
              >
                {place.postTitle}
              </span>

              <div
                class="absolute right-0 translate-x-1/2 rounded-full bg-darkgreen md:p-1 lg:group-hover:bg-black"
              >
                <Icon name="arrow" className="w-6 fill-white" />
              </div>
            </div>
          </button>
        </li>
      {/if}
    {/each}
  </ul>
</div>
