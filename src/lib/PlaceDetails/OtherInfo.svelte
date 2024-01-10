<script lang="ts">
  import { placeDetailsStore } from "../../data/placeDetails";

  $: otherInfo = $placeDetailsStore.placeDetails?.otherInfo;
</script>

{#if otherInfo}
  <aside
    class="bg-darkgreen p-8 text-center text-white sm:float-right sm:mb-5 sm:ml-5 sm:w-1/2"
  >
    <p class="py-2 text-xl text-white">Övrig Information</p>
    <p class="whitespace-break-spaces py-3 text-sm">{otherInfo}</p>
  </aside>
{/if}
