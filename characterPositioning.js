//the function needs to return all indices in the string, where
//each character is found. This means they should line up in the
//following way:
//l: 0
//i: 1, 12
//g: 2
//h: 3, 5, 16, 19
//t: 4, 15
//h: 5
//o: 7, 20
//u: 8, 21
//s: 9, 22
//e: 10, 17, 23
// : 11, 14, 18
//i: 12
//n: 13
// : 14
//t: 15
//h: 16
//e: 17
// : 18
//h: 19
//o: 20
//u: 21
//s: 22
//e: 23

//indexOf to be used?

//create array for each letter, only one array per letter
//push each indexof to the corresponding array

//the keys in the object should have an array of numbers
//corresponding to their indexof.

var lettersFunction = {
//function to count characters
  countCharacterTypes: function(str) {
    var output = {};
    var propName;
   for (var i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase();
      if (/[a-z]/.test(char) === false) {continue;}
        propName = char;
        if (output[propName] === undefined) {
          output[propName] = [];
          // console.log(char);
        }
        output[propName].push(i);
        // console.log(output);
    }
    return output;
  }
}

console.log(lettersFunction.countCharacterTypes("Alaska has many bears bear beats ..,,>>"));

