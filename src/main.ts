import "./app.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("map-root") as HTMLElement,
});

export default app;
