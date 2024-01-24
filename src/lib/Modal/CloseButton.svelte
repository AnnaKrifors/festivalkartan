<script lang="ts">
  import Icon from "../Icon.svelte";

  export let onClick: () => void;
</script>

<button
  title="stäng modal"
  class="h-7 w-7 rounded-full bg-cherryred lg:hover:bg-coralred"
  on:click={onClick}
>
  <Icon name="close" className="h-5 w-5 text-white" />
</button>
