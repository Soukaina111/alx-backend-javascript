const createInt8TypedArray = (length, position, value) => {
  // Create a new ArrayBuffer with the specified length
  const arrbuffer = new ArrayBuffer(length);

  // Create an Int8Array view of the ArrayBuffer
  const int8Array = new Int8Array(arrbuffer);

  // Check if the target position is within the range of the Int8Array
  if (position > int8Array.length) {
    throw new Error('Position outside range');
  }

  // Set the value at the target position in the Int8Array
  int8Array[position] = value;

  // Return a DataView of the modified ArrayBuffer
  return new DataView(arrbuffer);
};

export default createInt8TypedArray;
