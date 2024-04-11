---
title: "Fastest method to loop over an array in JavaScript"
description: "Understanding for, while, for...of, forEach, reduce, map"
keywords: "astro view-transition new api web-api animation transition"
pubDate: "Feb 06 2024"
isPublished: true
heroImage: "/blog/fastest-js-array-loop.jpeg"
---

We have Several methods to loop over an array in javascript like we have

- Traditional for loop
- while loop
- for…of loop
- forEach
- reduce
- map

TL;DR — Traditional for loop is the fastest in the game

## Traditional for loop

Traditional for loop is the fastest among all the array looping methods. Unlike map, for loop doesn’t create new copy of array to loop over

```javascript
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  // Perform actions with the element
}
```

Directly accesses array elements using indices, often leading to the best performance.

## while loop

while loop offers similar performance to the for loop. but not identical with a slightly different syntax.

while loop with decrementing index variable is often a bit faster than the incrementing one

```javascript
let i = array.length;
while (i--) {
  const element = array[i];
  // Perform actions with the element
}
```

## for…of loop

for…of loop provides similar performance to the for loop as well. but with a more readable and understandable syntax.

```javascript
for (const element of array) {
  // Perform actions with the element
}
```

## forEach loop

forEach loop provides functional approach for iterating with a slightly slower performance, often used for side-effects.

```javascript
array.forEach((element) => {
  // Perform actions with the element
});
```

forEach loop can be less efficient due to function call overhead.

## reduce loop

reduce in JavaScript doesn't directly create a new array for looping unlike methods like map. Its primary purpose is to accumulate a single value by iterating over the elements of an array and combining them in a specific way. which makes reduce efficient for large arrays

```javascript
array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
```

## map

map method iterates through the original array once and uses the provided callback function to transform each element. The transformed elements are then stored in a new array, which is ultimately returned by the map method. creating a new array makes map slower than the for loop

```javascript
const array = [1, 4, 9, 16];

const map = array.map((x) => x * 2);

console.log(map);
```
