<script lang="ts">
  import { currentPlace } from "../../data/places";
  import { unsetCurrentPlace } from "../../utils/marker";
  import Icon from "../Icon.svelte";
</script>

<button
  title="Tillbaka till alla platser"
  class={`${
    $currentPlace == null ? "invisible" : ""
  } flex items-center gap-1 p-2 transition-colors hover:bg-slate-100`}
  on:click={() => {
    unsetCurrentPlace();
  }}
>
  <Icon name="back" className="w-5 h-5" />
  Alla platser
</button>
