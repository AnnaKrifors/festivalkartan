<script lang="ts">
  import { placeDetailsStore } from "../../data/placeDetails";
  import { currentPlace as currentPlaceStore } from "../../data/places";
  import Header from "./Header.svelte";
  import ImageCarousel from "./ImageCarousel.svelte";
  import Video from "./Video.svelte";

  let loading: boolean;
  let error: boolean;
  let placeDetails: any;
  placeDetailsStore.subscribe((value) => {
    loading = value.loading;
    error = value.error;

    placeDetails = value.placeDetails;
  });
</script>

<div class="flex h-full flex-col">
  {#if error}
    <div class="px-10 py-20">
      <p class="text-center text-xl">
        Vi lyckades inte hämta mer information om den här platen just nu.
      </p>
    </div>
  {:else if loading}
    <div class="px-10 py-20">
      <p class="text-center text-xl">Hämtar mer information om platsen...</p>
    </div>
  {:else if placeDetails}
    <Header
      title={$currentPlaceStore?.post_title}
      images={$currentPlaceStore?.images}
      video={placeDetails?.video}
      videoOnTop={$currentPlaceStore?.video_on_top}
    />
    <div class="p-10">
      <p class="text-center text-xl">{@html placeDetails?.preface}</p>
    </div>
    <div
      class="w-100 flex-grow justify-between max-sm:flex max-sm:flex-col-reverse sm:px-10"
    >
      <div class="mb-auto">
        <div class="mb-10 max-sm:px-10">
          <p class="text-lg">{@html placeDetails?.body}</p>
        </div>
      </div>
    </div>
    <div class="clear-right mt-auto">
      {#if !$currentPlaceStore?.video_on_top}
        <Video video={placeDetails.video} />
      {:else}
        <ImageCarousel images={$currentPlaceStore?.images} />
      {/if}
    </div>
  {/if}
</div>
