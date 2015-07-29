function Runner(word) {
  this.word = word
}

Runner.prototype.balanceWord = function() {
  console.log(this.word);
  // your code here
  var alphabet = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26
  }

  var array = this.word.split("");
  var numArray = [];
  var leftSum = 0;
  var rightSum = 0;
  var anchor = "";

  for(var i = 0; i < array.length; i++) {
    numArray.push(alphabet[array[i]]);
  }

  for(var i = 0; i < numArray.length; i++) {
    rightSum = 0;
    leftSum = 0;
    for(var x = i + 1; x < numArray.length; x++) {
      rightSum += (numArray[x] * (x-i));
    }
    for(var y = i - 1; y >= 0; y--) {
      leftSum += (numArray[y] * (i-y));
    }
    if(leftSum === rightSum) {
      anchor = array[i];
      array.splice(i+1,0," ");
      array.splice(i,0," ");
      return array.join("");
    } else if(anchor === "" && i === numArray.length-1) {
      return "unbalanceable";
    }
  }
};


module.exports = Runner;