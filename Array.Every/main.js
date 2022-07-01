function everyElement(Fun) {
  let R = 0;
  for (let i = 0; i < this.length; i++) {
    if (Fun(this[i])) R += 1;
  }
  return R === this.length ? true : false;
}

Array.prototype.everyElement = everyElement;

console.log(
  [1, 2, 3, 4, 5].everyElement((e) => {
    return e < 10;
  })
);
