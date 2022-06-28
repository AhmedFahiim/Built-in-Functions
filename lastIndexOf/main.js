function lastIndexOfFun(str) {
  let index = 0;

  for (let i = 0; i < this.length; i++) {
    str == this[i] ? (index = i) : "";
  }
  return index;
}

String.prototype.lastIndexOfFun = lastIndexOfFun;
Array.prototype.lastIndexOfFun = lastIndexOfFun;

console.log([..."Fahiim"].lastIndexOfFun("i"));
