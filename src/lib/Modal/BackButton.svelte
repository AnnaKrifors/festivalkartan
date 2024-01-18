<script lang="ts">
  import { currentPlace } from "../../data/places";
  import Icon from "../Icon.svelte";
  export let onClick: () => void;
</script>

<button
  title="Tillbaka till alla platser"
  class={`${
    $currentPlace == null ? "invisible" : ""
  } flex items-center gap-1 p-2 transition-colors lg:hover:fill-black/[0.8] lg:hover:text-black/[0.8]`}
  on:click={onClick}
>
  <Icon name="back" className="w-5 h-5" />
  Alla platser
</button>
