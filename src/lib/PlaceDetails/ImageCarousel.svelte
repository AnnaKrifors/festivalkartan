<script>
  import { fade } from "svelte/transition";
  import { swipe } from "svelte-gestures";
  import Icon from "../Icon.svelte";

  /**
   * @type {string | any[]}
   */
  export let images = [];

  let index = 0;

  const next = () => {
    index = (index + 1) % images.length;
  };
  const prev = () => {
    index = index == 0 ? images.length - 1 : (index - 1) % images.length;
  };
  const swipeHandler = (
    /** @type {{ detail: { direction: string; }; }} */ event,
  ) => {
    if (event.detail.direction == "left") {
      next();
    } else if (event.detail.direction == "right") {
      prev();
    }
  };
</script>

<div class="relative z-0 overflow-x-hidden">
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
      class="px-auto absolute left-0 right-0 top-2 z-10 flex justify-center gap-1"
    >
      {#each images as _, listIndex}
        <span
          class={`h-3 w-3 rounded-full ${
            listIndex === index ? "bg-black" : "bg-white"
          }`}
        />
      {/each}
    </span>
    <button
      class="absolute -right-0 top-1/2 z-10 h-20 w-20 -translate-y-1/2 translate-x-1/2 rounded-full bg-black p-2 text-white"
      title="Nästa bild"
      on:click={next}
    >
      <Icon
        name="arrow"
        className={`transform -translate-x-4 h-11 w-11 fill-white`}
      /></button
    >
    <button
      class="absolute top-1/2 z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white"
      title="Föregående bild"
      on:click={prev}
      ><Icon
        name="arrow"
        className={`transform translate-x-4 h-11 w-11 -rotate-180 fill-white`}
      /></button
    >
  {/if}
</div>
