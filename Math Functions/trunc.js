function truncFun(num) {
  let R = "";
  let numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === ".") {
      break;
    } else R += numStr[i];
  }
  return +R;
}

console.log(truncFun(52456.2546456));
