// i stumbled on this when struggling throught this one:
// http://www.programwitherik.com/functional-javascript-with-reduce/

function countWords(arr) {
  return arr.reduce(function(count, word) {
    count[word] = ++count[word] || 1;
    return count;
  },{})
}

module.exports = countWords;