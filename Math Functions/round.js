function roundFun(num) {
  let R = 0;
  let numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === ".") {
      if (numStr[i + 1] >= 5) {
        R = Number(R) + 1;
      }
      break;
    } else R += numStr[i];
  }
  return +R;
}

console.log(roundFun(1999.5));
