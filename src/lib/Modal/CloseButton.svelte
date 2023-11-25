<script lang="ts">
  import Icon from "../Icon.svelte";

  export let onClick: () => void;
</script>

<button title="stäng modal" class="p-2" on:click={onClick}>
  <Icon name="close" className="w-5 h-5" />
</button>
