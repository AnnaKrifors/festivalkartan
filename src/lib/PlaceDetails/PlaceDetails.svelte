<script lang="ts">
  import { placeDetailsStore } from "../../data/placeDetails";
  import { currentPlace as currentPlaceStore } from "../../data/places";
  import About from "./OtherInfo.svelte";
  import Header from "./Header.svelte";
  import ImageCarousel from "./ImageCarousel.svelte";
  import ProgramButton from "./ProgramButton.svelte";
  import Video from "./Video.svelte";
  import Footer from "./Footer.svelte";
  let loading: boolean;
  let error: boolean;
  let placeDetails: any;
  placeDetailsStore.subscribe((value) => {
    loading = value.loading;
    error = value.error;

    placeDetails = value.placeDetails;
  });
</script>

<div class=" flex h-full flex-col bg-cover">
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
      title={$currentPlaceStore?.postTitle}
      images={$currentPlaceStore?.images}
      video={placeDetails?.video}
      videoOnTop={$currentPlaceStore?.videoOnTop}
    />
    <div class=" p-10">
      <p class="text-xl">{@html placeDetails?.preface}</p>
    </div>
    <div
      class="w-100 flex-grow justify-between max-sm:flex max-sm:flex-col-reverse sm:px-10"
    >
      <About />
      <div
        class="bg-mobile-green-gradient flex h-52 items-center justify-center pt-14 sm:hidden"
      >
        {#if placeDetails.buttonDetails}
          <ProgramButton buttonDetails={placeDetails.buttonDetails} />
        {/if}
      </div>
      <div class="mb-auto">
        <div class="mb-6 max-sm:px-10">
          <p class="text-lg">{@html placeDetails?.body}</p>
        </div>
      </div>
    </div>
    <div class="bg-lg-green-gradient h-56 pb-20 pt-32 max-sm:hidden">
      {#if placeDetails.buttonDetails}
        <ProgramButton buttonDetails={placeDetails.buttonDetails} />
      {/if}
    </div>

    <div class="bg-limegreen clear-right mt-auto">
      {#if !$currentPlaceStore?.videoOnTop}
        <Video video={placeDetails.video} />
      {:else}
        <ImageCarousel images={$currentPlaceStore?.images} />
      {/if}
    </div>
  {/if}
  <Footer />
</div>
