<script>
  import { fade } from "svelte/transition";
  import { swipe } from "svelte-gestures";
  import Icon from "../Icon.svelte";

  export let images = [];

  let index = 0;

  const next = () => {
    index = (index + 1) % images.length;
  };
  const prev = () => {
    index = index == 0 ? images.length - 1 : (index - 1) % images.length;
  };
  const swipeHandler = (event) => {
    if (event.detail.direction == "left") {
      next();
    } else if (event.detail.direction == "right") {
      prev();
    }
  };
</script>

<div class="relative z-0">
  <div
    class="relative aspect-video overflow-hidden"
    use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: "pan-y" }}
    on:swipe={swipeHandler}
  >
    {#each [images[index]] as image (index)}
      <img
        class="absolute z-0 w-full"
        transition:fade|local
        src={image?.url}
        alt={image?.alt}
        title={image?.alt}
      />
    {/each}
  </div>
  {#if images.length > 1}
    <span
      class="px-auto justify-content-center absolute left-0 right-0 top-2 z-10 flex gap-1"
    >
      {#each images as _, listIndex}
        <span
          class={`h-3 w-3 rounded-full ${
            listIndex === index ? "bg-[#44634B]" : "bg-white"
          }`}
        />
      {/each}
    </span>
    <button
      class="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#44634B] p-2 text-white"
      title="Nästa bild"
      on:click={next}
    >
      <Icon name="expand" className={`h-5 w-5 transform rotate-90`} /></button
    >
    <button
      class="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#44634B] p-2 text-white"
      title="Föregående bild"
      on:click={prev}
      ><Icon name="expand" className={`h-5 w-5 transform -rotate-90`} /></button
    >
  {/if}
</div>
