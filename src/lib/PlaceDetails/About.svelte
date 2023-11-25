<script lang="ts">
  import { placeDetailsStore } from "../../data/placeDetails";
  import { currentPlace } from "../../data/places";
  import type { PlaceDetails } from "../../types/PlaceDetails";
  import HotelStars from "./HotelStars.svelte";

  let details: PlaceDetails | undefined;
  placeDetailsStore.subscribe((value) => {
    details = value.placeDetails;
  });

  let aboutList: {
    label: string;
    value: string | undefined;
  }[];

  $: {
    aboutList = [
      {
        label: "Läge",
        value: details?.location,
      },
      {
        label: "Avstånd till Västerås centralstation",
        value: details?.distanceToTrainStation,
      },
      {
        label: "Miljöcertifiering",
        value: details?.enviromentCertification ? "Ja" : undefined,
      },
      {
        label: "Hotellstjärnor",
        value: details?.hotelStars,
      },
    ].filter((item) => item.value && item.value !== "Inga");
  }
</script>

{#if aboutList.length > 0 || $currentPlace?.facilities?.find((facility) => facility.capacity > 0)}
  <div
    class="bg-[#44634B] p-8 text-white sm:float-right sm:mb-5 sm:ml-5 sm:w-1/2"
  >
    <h2 class="mb-2 text-2xl text-white">Om {$currentPlace?.post_title}</h2>
    <dl class="pb-3">
      {#each aboutList as about}
        <div class="flex flex-col pb-3">
          {#if about.label === "Hotellstjärnor"}
            <HotelStars stars={about.value?.toString()} />
          {:else if about.value}
            <dt class="font-thin text-slate-100">{about.label}</dt>
            <dd class="font-medium">{about.value}</dd>
          {/if}
        </div>
      {/each}
    </dl>
    {#if $currentPlace?.facilities?.find((facility) => facility.capacity > 0)}
      <h3 class="mb-2 text-2xl text-[#FFE075]">Kapacitet</h3>
    {/if}
    <dl>
      {#if $currentPlace?.facilities}
        {#each $currentPlace?.facilities as facility}
          {#if facility.capacity > 0}
            <div class="flex flex-col pb-3">
              <dt class="font-thin text-slate-100">{facility.name}</dt>
              <dd class="font-medium">
                {facility.name === "Evenemangsyta"
                  ? "Ja"
                  : `${facility.capacity} ${facility.unit}`}
              </dd>
            </div>
          {/if}
        {/each}
      {/if}
    </dl>
  </div>
{/if}
