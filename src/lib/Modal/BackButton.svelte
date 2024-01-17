<script lang="ts">
  import { currentPlace } from "../../data/places";
  import Icon from "../Icon.svelte";
  export let onClick: () => void;
</script>

<button
  title="Tillbaka till alla platser"
  class={`${
    $currentPlace == null ? "invisible" : ""
  } flex items-center gap-1 p-2 transition-colors hover:bg-slate-100`}
  on:click={onClick}
>
  <Icon name="back" className="w-5 h-5" />
  Alla platser
</button>
