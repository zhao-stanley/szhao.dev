export default function properCase(text) {
  let first = text[0].toUpperCase();
  let rest;
  if (text.includes("js")) {
    rest = text.replace("js", "JS");
  } else if (text.includes("css")) {
    rest = text.replace("css", "CSS");
  } else {
    rest = text.replace("db", "DB");
  }

  return rest.replace(rest[0], first);
}
