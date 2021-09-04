export default function readFile(fileName) {
  return fetch(fileName).then((response) => response.text());
}
