<script lang="ts">
  import Icon from "../Icon.svelte";

  export let onClick: () => void;
  export let expanded: boolean;
</script>

<button
  title={`${expanded ? "minimera" : "expandera"} modal`}
  class="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-darkgreen p-2"
  on:click={onClick}
>
  <Icon
    name="expand"
    className={`text-white h-8 w-8 ${
      expanded ? "transform rotate-180" : ""
    } transition-transform`}
  />
</button>
