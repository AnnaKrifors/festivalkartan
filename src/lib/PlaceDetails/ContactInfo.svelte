<!-- <script lang="ts">
  import type { ContactInfo } from "../../types/PlaceDetails";
  import Icon from "../Icon.svelte";

  export let info: ContactInfo;

  let infoItems: {
    key: string;
    value: string;
    href?: string;
  }[] = [];
  $: {
    infoItems = Object.entries(info).map(([key, value]) => {
      if (key === "address") {
        return {
          key,
          value,
        };
      }
      if (key === "phone") {
        return {
          key,
          value,
          href: `tel:${value}`,
        };
      }
      return {
        key,
        value,
        href: value,
      };
    });
  }
</script>

<section class="clear-both justify-items-center bg-yellow px-2 pb-16 pt-14">
  <h2 class="mb-9 py-0 text-center text-2xl text-blue">Kontaktinformation</h2>
  <address>
    {#each infoItems as item}
      {#if item.value}
        {#if item.href}
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            class="mb-5 flex items-center justify-center break-all font-bold text-blue"
          >
            <Icon name={item.key} className="h-5 w-5 mr-2" />
            {item.value}
          </a>
        {:else}
          <p
            class="break-word mb-5 flex items-center justify-center font-bold text-blue"
          >
            <Icon name={item.key} className="h-5 w-5 mr-2" />
            {item.value}
          </p>
        {/if}
      {/if}
    {/each}
  </address>
</section> -->
