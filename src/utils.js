export default function properCase(text) {
  let first = text[0].toUpperCase();
  let rest;
  if (text.includes("js")) {
    rest = text.replace("js", "JS");
  } else {
    rest = text.replace("css", "CSS");
  }

  return rest.replace(rest[0], first);
}
