console.log('loaded')

// var numbers = [3,4,5,6]
// var answer1 = sumArray(numbers);
// var answer2 = multiplyArray(numbers);
//
// var myResultsTag = document.querySelector('#results');
// myResultsTag.innerHTML = answer1 + '' + answer2;
//
//
// function sumArray(incomArr) {
//   var final_number = 0;
// for (var counter = 0; counter < incomArr.length; counter++) {
//   console.log(incomArr[counter]);
//   final_number += incomArr[counter];
// }
//
// return final_number;
// }
// function multiplyArray(incomArr){
// var final_number = 1;
// for (var counter = 0; counter < incomArr.length; counter++) {
//   console.log(incomArr[counter]);
//   final_number *= incomArr[counter];
// }
//
// return final_number;
//
// }

var words = ['a', 'be', 'and', 'this', 'words', 'result', 'whoopee'];
var answer = findLongestWord(words);

var myResultsTag = document.querySelector('#results');
myResultsTag.innerHTML = answer;

function findLongestWord(incoming_array) {
  var biggest_length_so_far = 0;
  console.log('biggest length start at' + 'biggest_length_so_far');
  for (var counter = 0; counter < incoming_array.length; counter++) {
    console.log('biggest length start at' + 'biggest_length_so_far');
    var word = incoming_array[counter];
    console.log('new word length: ' + word.length);

    if (words.length > biggest_length_so_far) {
      console.log('if-statement triggered');
      biggest_length_so_far = word.length;
    }
    console.log('new value of biggest_length_so_far: ' + biggest_length_so_far);
  }

  return biggest_length_so_far;

}
