function Runner(word) {
  this.word = word
}

Runner.prototype.balanceWord = function() {
  console.log(this.word);
  // your code here
};


module.exports = Runner;