export function getVideoId(url: string) {
  const regex =
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  const match = regex.exec(url);
  return match ? match[3] : null;
}
