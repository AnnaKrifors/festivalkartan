<script lang="ts">
  import { placeDetailsStore } from "../../data/placeDetails";

  $: otherInfo = $placeDetailsStore.placeDetails?.otherInfo;
</script>

{#if otherInfo}
  <aside
    class="bg-limegreen p-8 text-black sm:float-right sm:mb-5 sm:ml-5 sm:w-1/2"
  >
    <p class="py-2 text-center text-xl font-semibold text-black">
      Övrig Information
    </p>
    <p class="whitespace-break-spaces py-3 text-sm">{@html otherInfo}</p>
  </aside>
{/if}
