<script lang="ts">
  import type { Video } from "../../types/PlaceDetails";

  export let video: Video;
  export let autoPlay: boolean = false;

  // example url: "https://www.youtube.com/embed/C0DPdy98e4c?feature=oembed"
  $: videoId = video?.source.split("/").pop()?.split("?")[0];
</script>

{#if video?.type === "iframe"}
  {#if autoPlay}
    <div class="relative aspect-video w-full overflow-hidden md:aspect-[16/6]">
      <iframe
        tabindex="-1"
        frameborder="0"
        title={video?.description}
        src={video?.source.split("?")[0] +
          "?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=" +
          videoId}
        width="100%"
        class="aspect-video md:-translate-y-[15%]"
      />
      <div class="absolute top-0 hidden h-full w-full bg-white/0 md:block" />
    </div>
  {:else}
    <iframe
      tabindex="-1"
      frameborder="0"
      title={video?.description}
      src={video?.source.split("?")[0]}
      width="100%"
      class="aspect-video"
    />
  {/if}
{:else if video?.type === "video/mp4" || video?.type === "video/webm"}
  {#if autoPlay}
    <video
      autoplay
      loop
      muted
      class="aspect-video"
      aria-label={video.description}
      playsinline
    >
      <source src={video?.source} type={video.type} />
      <track kind="captions" />
    </video>
  {:else}
    <video
      controls
      class="aspect-video"
      aria-label={video.description}
      playsinline
    >
      <source src={video.source} type={video.type} />
      <track kind="captions" />
    </video>
  {/if}
{/if}
