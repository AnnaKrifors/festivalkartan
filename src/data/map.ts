import { writable } from "svelte/store";
import type { Map } from "maplibre-gl";

export const mapStore = writable<Map>(undefined);
