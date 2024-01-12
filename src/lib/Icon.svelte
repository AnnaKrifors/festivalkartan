<script lang="ts">
  export let name: string;
  export let className: string | undefined = undefined;
  export let color: string | undefined = undefined;
</script>

<span class="flex shrink-0 items-center justify-center">
  {#if name === "back"}
    <svg
      class={className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      ><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
      ></path></svg
    >
  {:else if name === "funfair"}
    <svg
      class={className}
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 -2 23 16"
      fill={color || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M10.43 18.75c.37-.46.94-.75 1.57-.75.63 0 1.19.29 1.56.75.39-.09.76-.21 1.12-.36l-1.42-3.18c-.39.15-.82.23-1.26.23-.46 0-.9-.09-1.3-.25l-1.43 3.19c.38.16.76.29 1.16.37zM5.15 10c-.16.59-.25 1.21-.25 1.85 0 .75.12 1.47.33 2.15.63.05 1.22.4 1.56.99.33.57.35 1.23.11 1.79.27.27.56.53.87.76l1.52-3.39c-.47-.58-.75-1.32-.75-2.13 0-1.89 1.55-3.41 3.46-3.41s3.46 1.53 3.46 3.41c0 .82-.29 1.57-.78 2.16l1.5 3.35c.32-.24.62-.5.9-.79-.22-.55-.2-1.2.12-1.75.33-.57.9-.92 1.52-.99.22-.68.34-1.41.34-2.16 0-.64-.09-1.27-.25-1.86-.64-.04-1.26-.39-1.6-1-.36-.62-.35-1.36-.03-1.95-.91-.98-2.1-1.71-3.44-2.05C13.39 5.6 12.74 6 12 6s-1.39-.41-1.74-1.01c-1.34.34-2.53 1.05-3.44 2.03.33.6.35 1.35-.02 1.98-.35.62-.99.97-1.65 1zm-1.3-.42c-.78-.6-1.02-1.7-.51-2.58.51-.88 1.58-1.23 2.49-.85 1.11-1.17 2.56-2.03 4.18-2.42C10.15 2.75 10.99 2 12 2s1.85.75 1.98 1.73c1.63.39 3.07 1.24 4.18 2.42.91-.38 1.99-.03 2.49.85.51.88.27 1.98-.51 2.58.23.77.35 1.58.35 2.42s-.12 1.65-.35 2.42c.78.6 1.02 1.7.51 2.58-.51.88-1.58 1.23-2.49.85-.4.43-.85.81-1.34 1.15l1.34 3H16.3l-.97-2.17c-.43.18-.88.33-1.34.44-.14.98-.98 1.73-1.99 1.73s-1.85-.75-1.98-1.73c-.48-.12-.94-.27-1.38-.46L7.66 22H5.78l1.36-3.03a8.72 8.72 0 0 1-1.3-1.12c-.92.38-1.99.03-2.5-.85s-.27-1.98.51-2.58c-.23-.77-.35-1.58-.35-2.42s.12-1.65.35-2.42z"
      ></path></svg
    >
  {:else if name === "toilet"}
    <svg
      class={className}
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 -2 23 16"
      fill={color || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"
      ></path></svg
    >
  {:else if name === "other"}
    <svg
      class={className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={color || "currentColor"}
      ><path
        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill={color || "currentColor"}
      ></path></svg
    >
  {:else if name === "chevron"}
    <svg
      class={className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      ><path
        d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
        fill={color || "currentColor"}
      ></path></svg
    >
  {:else if name === "close"}
    <svg
      class={className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={color || "currentColor"}
      ><path
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      ></path></svg
    >
  {:else if name === "expand"}
    <svg
      class={className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      ><path
        d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
        fill={color || "currentColor"}
      ></path></svg
    >
  {:else if name === "important"}
    <svg
      class={className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      ><circle cx="12" cy="19" r="2"></circle><path
        d="M10 3h4v12h-4z"
        fill={color || "currentColor"}
      ></path></svg
    >
  {:else if name === "entrance"}
    <svg
      class={className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      ><path
        d="M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        fill={color || "currentColor"}
      ></path></svg
    >
  {:else if name === "arrow"}
    <svg
      class={className}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ArrowRightAltIcon"
      ><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg
    >
  {:else if name === "scene" || "stage"}
    <svg
      class={className}
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 2 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.221 18.2403L6.5296 21.0665C6.32235 21.1983 6.10568 21.2549 5.87958 21.236C5.65349 21.2172 5.45566 21.1418 5.28609 21.0099C5.11652 20.8781 4.98463 20.7134 4.89043 20.5159C4.79622 20.3177 4.77738 20.0961 4.8339 19.8512L6.07741 14.5098L1.92296 10.9205C1.73455 10.751 1.61698 10.5577 1.57025 10.3406C1.52277 10.1243 1.53671 9.91254 1.61208 9.70529C1.68744 9.49804 1.80049 9.32847 1.95122 9.19658C2.10195 9.06469 2.3092 8.97991 2.57297 8.94223L8.05573 8.46178L10.1754 3.43121C10.2696 3.20512 10.4158 3.03555 10.614 2.9225C10.8114 2.80945 11.0138 2.75293 11.221 2.75293C11.4283 2.75293 11.631 2.80945 11.8292 2.9225C12.0267 3.03555 12.1725 3.20512 12.2667 3.43121L14.3863 8.46178L19.8691 8.94223C20.1329 8.97991 20.3401 9.06469 20.4908 9.19658C20.6416 9.32847 20.7546 9.49804 20.83 9.70529C20.9053 9.91254 20.9197 10.1243 20.8729 10.3406C20.8255 10.5577 20.7075 10.751 20.5191 10.9205L16.3646 14.5098L17.6082 19.8512C17.6647 20.0961 17.6458 20.3177 17.5516 20.5159C17.4574 20.7134 17.3255 20.8781 17.156 21.0099C16.9864 21.1418 16.7886 21.2172 16.5625 21.236C16.3364 21.2549 16.1197 21.1983 15.9125 21.0665L11.221 18.2403Z"
        fill={color || "currentColor"}
      />
    </svg>
  {:else}
    <svg
      class={className}
      preserveAspectRatio="xMinYMin meet"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={color || "currentColor"}
    >
      <path
        d="M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
      /></svg
    >
  {/if}
</span>
