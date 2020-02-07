# Sort and Loop Through Arrays in JavaScript

One of the most powerful aspects of programming is the ability to repeat an action many times.

Here, we've created a function which greets anyone we tell it to:

```
// this function takes a string as an argument
const sayHello = (name) => {
  console.log("Hello" + name + "!");
};

sayHello("reader"); // => "Hello reader!"
```

But what if we catch our favorite band behind the venue and need to say hello really quickly? Writing it out that way would get tedious!

```
sayHello("John") // => "Hello John!"
sayHello("Paul") // => "Hello Paul!"
sayHello("George") // => "Hello George!"
sayHello("Ringo") // => "Hello Ringo!"
```

At this point, they would be gone! Let's make things easier on ourselves, and use an array to make our code more lightweight and versatile.

## Let It Be an Array

Why couldn't Paul McCartney learn Javascript? He much preferred writing in C! All jokes aside though, arrays are useful as containers for other things, whether they are strings, objects, or even other arrays. Let's use one here to keep track of the band:

```
const beatles = [];
```

It's not very full at the moment, so let's add a couple of members to the group!

```
const beatles = [];
beatles.push("John"); // => ["John"]
beatles.push("Paul"); // => ["John", "Paul"]
beatles.push("George"); // => ["John", "Paul", "George"]
beatles.push("Ringo"); // => ["John", "Paul", "George", "Ringo"]
```

`push()` is one of the key methods associated with arrays. Think about `push()` as a built in function that all arrays can use, regardless of where they came from!

Arrays have a couple of traits that make them great at organizing information in **sequential** order -- that is, everything stored in an array has a numbered value describing its position. One way to think about them is almost like an egg carton, where each egg fits into a specific place in the box, and only one place in the box.

Here, let's look at the numbers associated with each of our Beatles. By listing their names inside of the array, they're together by default:

```
const beatles = ["John", "Paul", "George", "Ringo"];
console.log(beatles[0]); // => "John"
console.log(beatles[1]); // => "Paul"
console.log(beatles[2]); // => "George"
console.log(beatles[3]); // => "Ringo"
```

Wait a second! I thought that there were four Beatles! Why are we counting 0-3? This is one quirk of arrays that trips up even senior developers, creating all kinds of "off-by-one" errors. It takes some adjustment, but it can be helpful to consider the 0th position the "starting" position instead of the "first" position.

All good things must come to an end, and so let's break up the band:

```
const beatles = ["John", "Paul", "George", "Ringo"];
beatles.shift(); // => returns "John", ["Paul", "George", "Ringo"]
beatles.pop(); // => return "Ringo", ["Paul", "George"]
beatles.splice(0,2); // => return ["Paul, "George"], []
```

There are several ways to change the contents of an array with the built-in methods `shift()`, `pop()`, and `splice()`! Each of them does something slightly different as you can see. You can read more about these methods on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Common_operations).

## All You Need is Loops

Show a function that accepts an array as input. Within the function, use a for loop that prints out each item of the array on its own line. Explain how it works.

One of the primary uses for arrays is to iterate, or cycle through, its contents and apply a piece of logic to each item. This version of the `sayHello()` function we wrote earlier takes an array as an argument, instead of a string!

```
const beatles = ["John", "Paul", "George", "Ringo"];

const sayHello = (array) => {
  for (i = 0; i < array.length; i++;){
    console.log('Hello,' + array[i] + "!");
  }
};

sayHello(beatles);
// => "Hello John!"
// => "Hello Paul!"
// => "Hello George!"
// => "Hello Ringo!"
```

Notice that we have a new style of function here, `for()`. This is a powerful tool that lets us execute an action any number of times. It uses a default argument called `i`, which represents the **initialization** of the loop. Writing out what this basic loop does, in English:

```
for ("Starting At Zero"; "Stop When At End Of Array"; "Add One To Starting Value If Not"){
  // say hi to the Beatles here!
};
```

## Here Comes the Sort

Show the code required to sort the array alphabetically, ascending then descending. After each sort, call the function again. Explain how it works.

Everyone loves to debate -- who is the #1 Beatle? Let's look at another useful array method, `sort()`, and see if we can get to the bottom of it, and find out who the most popular Beatle is!

```
const beatles = ["John", "Paul", "George", "Ringo"];
beatles.sort(); // => ["George", "John", "Paul", "Ringo"]
```

As we all expected, Ringo ranks dead last. Poor man! But really what's happened here is we've organized the contents of our array by alphabetical order.

If we wanted to, we could give `sort()` a parameter to define how we wanted our results sorted. Let's sort it in reverse order using a custom `sort()` callback:

```
// this function returns 1 or -1 depending on how a name "ranks" in alphabetical order
const sortDesc = (a,b) => {
  if (a < b){
    return 1;
  } else {
    return -1;
  }
};

const beatles = ["John", "Paul", "George", "Ringo"];
beatles.sort(sortDesc); // => ["Ringo", "Paul", "John", "George"]
```

Or, for the true developer in us all:

```
const beatles = ["John", "Paul", "George", "Ringo"];
beatles.sort(); // => ["George", "John", "Paul", "Ringo"]
beatles.reverse(); // => ["Ringo", "Paul", "John", "George"]
```

## Get Back to Learning JavaScript

Provide an overview of what they learned, explain some next steps, and provide a link to help them take that step.

So, we've covered how to create an `Array`, how to add and remove items from it, and how to repeat actions across the contents of an array! What next? With these new tools, we can do two things -- first, use arrays to keep values in our code neat and organized, and second, efficiently run functions many more times than we could by hand!

For more ideas on how to use arrays and looping, check out the [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) on other kinds of loops, like `while` and `for...in`, and maybe create a loop which can greet every musician in the world!

```
// Hello, Mozart!
// Hello, Beethoven!
// Hello, Beyonce!
// Hello, Jack White!
// Hello, Adele!
// ...
```
