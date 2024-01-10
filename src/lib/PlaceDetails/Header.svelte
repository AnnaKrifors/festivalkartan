<script lang="ts">
  import type { Image } from "../../types/Image";
  import type { Video as VideoType } from "../../types/PlaceDetails";
  import ImageCarousel from "./ImageCarousel.svelte";
  import Video from "./Video.svelte";

  export let title: string = "";
  export let images: Image[] = [];
  export let video: VideoType;
  export let videoOnTop: boolean = false;
</script>

<div class="relative">
  <h1
    class={`z-10 rounded-r-lg text-xl tracking-wide text-white md:text-4xl ${
      (images?.length > 0 || videoOnTop) && "absolute"
    } bg-coralred bottom-0 translate-y-1/2 px-10 py-2`}
  >
    {title}
  </h1>
  {#if videoOnTop}
    <Video {video} autoPlay={true} />
  {:else if images?.length > 0}
    <ImageCarousel {images} />
  {/if}
</div>
