export default function appendToEachArrayValue(array, appendString) {
  const arraycont = [];
  for (const idx of array) {
    arraycont.push(`${appendString}${idx}`);
  }

  return arraycont;
}
