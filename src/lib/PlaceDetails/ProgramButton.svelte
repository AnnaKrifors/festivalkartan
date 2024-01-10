<script lang="ts">
  import Icon from "../Icon.svelte";

  export let buttonDetails: ButtonDetails;

  type ButtonDetails = {
    buttonText: string;
    url: string;
  };

  if (buttonDetails) {
    if (!buttonDetails.url.includes("https://"))
      buttonDetails.url = "https://" + buttonDetails.url;
  }
</script>

<a
  href={buttonDetails.url}
  class="bg-coralred hover:bg-cherryred relative m-auto flex h-12 w-72 items-center justify-center gap-1 rounded-full p-2 text-xl tracking-wide text-white no-underline"
  type="button"
  >{buttonDetails.buttonText}<Icon
    name="arrow"
    className="w-9 h-19 fill-white absolute right-1"
  /></a
>
