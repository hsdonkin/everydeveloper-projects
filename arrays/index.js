let sayHello = (name) => {
  console.log('Hello ' + name + '!');
};

sayHello('reader'); // => "Hello reader!"

sayHello('John'); // => "Hello John!"
sayHello('Paul'); // => "Hello Paul!"
sayHello('George'); // => "Hello George!"
sayHello('Ringo'); // => "Hello Ringo!"

let beatles = [];
beatles.push('John'); // => ["John"]
beatles.push('Paul'); // => ["John", "Paul"]
beatles.push('George'); // => ["John", "Paul", "George"]
beatles.push('Ringo'); // => ["John", "Paul", "George", "Ringo"]

console.log(beatles[0]); // => "John"
console.log(beatles[1]); // => "Paul"
console.log(beatles[2]); // => "George"
console.log(beatles[3]); // => "Ringo"

beatles.shift(); // => returns "John", ["Paul", "George", "Ringo"]
beatles.pop(); // => return "Ringo", ["Paul", "George"]
beatles.splice(0, 2); // => return ["Paul, "George"], []

beatles = ['John', 'Paul', 'George', 'Ringo'];

sayHello = (array) => {
  for (i = 0; i < array.length; i++) {
    console.log('Hello ' + array[i] + '!');
  }
};

sayHello(beatles);
// => "Hello John!"
// => "Hello Paul!"
// => "Hello George!"
// => "Hello Ringo!"

beatles.sort(); // => ["George", "John", "Paul", "Ringo"]

beatles = ['John', 'Paul', 'George', 'Ringo'];

// comparison function has to return positive / negative values
const sortDesc = (a, b) => {
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
};

beatles.sort(sortDesc); // => ["Ringo", "Paul", "John", "George"]

beatles = ['John', 'Paul', 'George', 'Ringo'];
beatles.sort(); // => ["George", "John", "Paul", "Ringo"]
beatles.reverse(); // => ["Ringo", "Paul", "John", "George"]
