function indexOfFun(element) {
  let index = 0;
  let i = 0;
  for (; i < this.length; ) {
    if (this[i] === element) {
      index = i;
      break;
    }
    i++;
  }
  if (i === this.length && index === 0) {
    return `The ${element} element not defined at ${this}`;
  } else return index;
}

String.prototype.indexOfFun = indexOfFun;
Array.prototype.indexOfFun = indexOfFun;

console.log([1, 2, 3].indexOfFun(5));
