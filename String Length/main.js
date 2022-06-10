function stringLength() {
  let length = 0;
  for (let i = 0; this[i] !== undefined; i++) {
    length++;
  }
  return length;
}

String.prototype.fahiimStringLength = stringLength;

console.log("ahmed".fahiimStringLength());
