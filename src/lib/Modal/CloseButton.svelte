<script lang="ts">
  import Icon from "../Icon.svelte";

  export let onClick: () => void;
</script>

<button
  title="stäng modal"
  class="bg-cherryred lg:hover:bg-coralred h-7 w-7 rounded-full"
  on:click={onClick}
>
  <Icon name="close" className="h-5 w-5 text-white" />
</button>
