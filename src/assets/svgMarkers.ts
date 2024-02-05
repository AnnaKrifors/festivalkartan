export const markerLabel = (title: string) =>
  `<div class="marker-label first-letter:uppercase absolute left-1/2 transform -translate-x-1/2 -translate-y-full -top-1 text-center text-sm whitespace-nowrap bg-slate-100 p-1 border-2 border-[#003E4A] rounded ">${title}</div>`;
export const toiletIcon = () => `
  <svg height="80%" class="marker-icon hover:drop-shadow-markerShadow MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
  <path d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z">
  </path>
  </svg>`;

export const wristBandIcon = () => `
  <svg height="80%" class="marker-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
  <path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM9.07 16 12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z"></path>
  </svg>`;

export const prideIcon = () => `
  <svg height="80%" class="marker-icon" fill="url('#prideColor')" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
  <path  d="M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0-4C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"></path>
  <defs>
  <linearGradient id="prideColor">
    <stop offset="14.28%" stop-color="#E40303" />
    <stop offset="28.56%" stop-color="#FF8C00" />
    <stop offset="42.84%" stop-color="#FFED00" />
    <stop offset="57.12%" stop-color="#008026" />
    <stop offset="71.4%" stop-color="#24408E" />
    <stop offset="84.68%" stop-color="#732982" />
  </linearGradient>
</defs>
  </svg>`;

export const entranceIcon = () => `
<svg height="80%" class="marker-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
<path d="M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
</svg>`;

export const sceneAreasIcon = () => `
<svg height="80%" class="marker-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
<path d="M7 5 3 7V3l4 2zm11-2v4l4-2-4-2zm-7-1v4l4-2-4-2zm2 16h-2v4c-5.05-.15-9-1.44-9-3v-9c0-1.66 4.48-3 10-3s10 1.34 10 3v9c0 1.56-3.95 2.85-9 3v-4zm-8-7.96c1.38.49 3.77.96 7 .96s5.62-.47 7-.96C19 9.86 16.22 9 12 9s-7 .86-7 1.04zm15 1.76c-1.82.73-4.73 1.2-8 1.2s-6.18-.47-8-1.2v6.78c.61.41 2.36 1.01 5 1.28V16h6v3.86c2.64-.27 4.39-.87 5-1.28V11.8z"></path>
</svg>`;

export const marketIcon = () => `
<svg height="80%" class="marker-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
<path d="m21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9 1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z"></path>
</svg>`;

export const waterIcon = () => `
<svg height="80%" class="marker-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
<path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2zm-4.17-6c.37 0 .67.26.74.62.41 2.22 2.28 2.98 3.64 2.87.43-.02.79.32.79.75 0 .4-.32.73-.72.75-2.13.13-4.62-1.09-5.19-4.12-.08-.45.28-.87.74-.87z"></path>
</svg>`;

export const redcrossIcon = () => `
<svg height="80%" class="marker-icon hover:drop-shadow-markerShadow" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4.33337" width="4.33333" height="13" rx="1" fill="#E40303"/>
<rect y="8.66667" width="4.33333" height="13" rx="1" transform="rotate(-90 0 8.66667)" fill="#E40303"/>
</svg>`;

export const funfairIcon = () => `
<svg height="80%" class="marker-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
<path d="M20.15 14.42c.23-.77.35-1.58.35-2.42s-.12-1.65-.35-2.42c.78-.6 1.02-1.7.51-2.58s-1.58-1.23-2.49-.85c-1.11-1.17-2.56-2.03-4.18-2.42C13.85 2.75 13.01 2 12 2s-1.85.75-1.98 1.73c-1.63.39-3.07 1.25-4.19 2.42-.91-.38-1.98-.03-2.49.85s-.27 1.98.51 2.58c-.23.77-.35 1.58-.35 2.42s.12 1.65.35 2.42c-.78.6-1.02 1.7-.51 2.58s1.58 1.23 2.49.85c.4.42.83.79 1.3 1.12L5.78 22h1.88l.98-2.19c.44.19.9.34 1.38.46.13.98.97 1.73 1.98 1.73s1.85-.75 1.98-1.73c.46-.11.91-.26 1.34-.44L16.3 22h1.88l-1.34-3c.48-.34.93-.72 1.34-1.15.91.38 1.99.03 2.49-.85.5-.88.26-1.98-.52-2.58zm-6.59 4.33c-.37-.46-.93-.75-1.56-.75s-1.2.29-1.57.75c-.4-.09-.79-.21-1.16-.37l1.43-3.19c.4.16.84.25 1.3.25.44 0 .87-.08 1.26-.23l1.42 3.18c-.36.15-.73.27-1.12.36zm-3.08-6.73c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm8.23 1.99c-.61.07-1.18.41-1.52.99-.32.56-.34 1.2-.12 1.75-.28.29-.58.55-.9.79l-1.5-3.35c.49-.59.78-1.34.78-2.16 0-1.89-1.55-3.41-3.46-3.41s-3.46 1.53-3.46 3.41c0 .8.28 1.54.75 2.13l-1.52 3.39c-.31-.23-.6-.48-.87-.76.26-.56.24-1.22-.09-1.79-.34-.59-.93-.94-1.56-.99-.22-.68-.33-1.4-.33-2.15 0-.64.09-1.26.25-1.85.66-.03 1.3-.38 1.65-1 .37-.63.35-1.38.01-1.98.92-.98 2.11-1.69 3.45-2.03.34.59.99 1 1.73 1s1.39-.4 1.73-1c1.34.34 2.53 1.07 3.44 2.05-.32.59-.33 1.33.03 1.95.35.6.96.95 1.6 1 .16.59.25 1.21.25 1.86 0 .75-.12 1.47-.34 2.15z"></path>
</svg>`;

export const safetytentIcon = () => `
<svg height="80%" class="marker-icon" MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
<path d="M16 13c3.09-2.81 6-5.44 6-7.7C22 3.45 20.55 2 18.7 2c-1.04 0-2.05.49-2.7 1.25C15.34 2.49 14.34 2 13.3 2 11.45 2 10 3.45 10 5.3c0 2.26 2.91 4.89 6 7.7zm-2.7-9c.44 0 .89.21 1.18.55L16 6.34l1.52-1.79c.29-.34.74-.55 1.18-.55.74 0 1.3.56 1.3 1.3 0 1.12-2.04 3.17-4 4.99-1.96-1.82-4-3.88-4-4.99 0-.74.56-1.3 1.3-1.3zM19 16h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94 8-2.5v-1c0-1.66-1.34-3-3-3zM3 20v-7h2v7H3zm10.97.41L7 18.48V13h1.61l5.82 2.17c.34.13.57.46.57.83 0 0-1.99-.05-2.3-.15l-2.38-.79-.63 1.9 2.38.79c.51.17 1.04.26 1.58.26H19c.39 0 .74.23.9.56l-5.93 1.84z"></path>
</svg>`;

export const prideParadeIcon = () => `
<svg height="45%" class="marker-icon" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H8.78613L10 3.42708L8.78613 7H0V0Z" fill="url('#prideColorFlag')"/>
<line x1="0.322505" y1="0.00151059" x2="0.249995" y2="12.0015" stroke="black" stroke-width="1px"/>
<defs>
<linearGradient id="prideColorFlag" gradientTransform="rotate(90)">
  <stop offset="14.28%" stop-color="#E40303" />
  <stop offset="28.56%" stop-color="#FF8C00" />
  <stop offset="42.84%" stop-color="#FFED00" />
  <stop offset="57.12%" stop-color="#008026" />
  <stop offset="71.4%" stop-color="#24408E" />
  <stop offset="84.68%" stop-color="#732982" />
</linearGradient>
</defs>
</svg>`;

export const defaultMarker = () => `
<svg height="100%" viewBox="0 0 136 203" xmlns="http://www.w3.org/2000/svg">
<path class="main-marker" fill="#F4F3F1" stroke="#1B1B1B" stroke-width="6px" d="M68.2726 201.102C68.1751 201.221 68.0842 201.332 67.9999 201.434C67.9156 201.332 67.8247 201.221 67.7272 201.102C67.0509 200.276 66.0622 199.057 64.8149 197.485C62.3204 194.34 58.7926 189.784 54.6638 184.145C46.4045 172.862 35.7482 157.253 26.1474 139.933C16.5422 122.604 8.01874 103.608 3.99054 85.5448C-0.0402374 67.4702 0.460388 50.4754 8.70216 37.0069C23.2475 13.2372 45.6528 1.41475 67.9999 1.41475C90.347 1.41475 112.752 13.2372 127.298 37.0069C135.539 50.4754 136.04 67.4702 132.009 85.5448C127.981 103.608 119.458 122.604 109.852 139.933C100.252 157.253 89.5953 172.862 81.336 184.145C77.2071 189.784 73.6794 194.34 71.1848 197.485C69.9376 199.057 68.9489 200.276 68.2726 201.102Z"/>
<circle class="marker-container relative" cx="68" cy="70" r="59" fill="#FFFDFD" stroke="none" stroke-width="2px"/>
</svg>
  `;
