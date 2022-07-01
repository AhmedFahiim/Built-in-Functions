function copyWithinFun(target, start = 0, end = this.length) {
  let CopiedArr = [];
  let counter = 0;

  //   //   loop to copy the items
  for (let i = start; i < end; i++) {
    CopiedArr.push(this[i]);
  }

  //   loop to past the items
  for (let x = target; counter < CopiedArr.length; x++) {
    if (x > this.length - 1) break;
    this[x] = CopiedArr[counter];
    counter++;
  }

  return this;
}

Array.prototype.copyWithinFun = copyWithinFun;

console.log([1, 2, 3, 4, 5, 6].copyWithinFun(3, 1, 4));
