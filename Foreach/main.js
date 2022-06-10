function ForeachFun(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

Array.prototype.ForeachFun = ForeachFun;

let arr = [1, 2, 3];

arr.ForeachFun((e) => {
  console.log(e);
});
