<script lang="ts">
  import { currentPlace } from "../../data/places";
  import PlaceDetails from "../PlaceDetails/PlaceDetails.svelte";
  import BackButton from "./BackButton.svelte";
  import CloseButton from "./CloseButton.svelte";
  import ExpandButton from "./ExpandButton.svelte";
  import PlaceList from "./PlaceList.svelte";
  import { handleBackClick } from "../../utils/url";

  let expanded = false;
  let closed = false;

  currentPlace.subscribe((value) => {
    if (value) {
      closed = false;
      expanded = true;
    }
    const modalContent = document.getElementById("modal-content");
    if (modalContent) {
      modalContent.scrollTop = 0;
    }
  });
</script>

<div
  id="modal"
  class="absolute bottom-0 left-0 z-10 max-h-full max-w-full pt-4"
>
  <div class="rounded-t-lg bg-limegreen">
    <ExpandButton
      onClick={() => {
        expanded = !expanded;
        if (expanded) {
          closed = false;
        }
      }}
      {expanded}
    />
    <div class={`flex justify-between px-2 pt-2 ${closed ? "invisible" : ""}`}>
      <BackButton
        onClick={() => {
          handleBackClick();
        }}
      />
      <CloseButton
        onClick={() => {
          closed = !closed;
          if (closed) {
            expanded = false;
            handleBackClick();
          }
        }}
      />
    </div>
    <div
      id="modal-content"
      class={`${
        closed
          ? "invisible max-h-0"
          : expanded
            ? "max-h-[calc(100dvh-18rem)]"
            : "max-h-[12rem] md:max-h-[40vh]"
      } h-screen w-[40rem] max-w-full overflow-y-scroll transition-all xl:w-[48rem]`}
    >
      {#if !$currentPlace}
        <PlaceList />
      {:else}
        <PlaceDetails />
      {/if}
    </div>
  </div>
</div>
