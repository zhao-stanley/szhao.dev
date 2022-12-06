---
title: Interview Prep Day 3
date: "12/5/2022"
draft: true
desc: "Analyzing some more stack problems. These are Leetcode problems 20 and 155."
genre: dsa
---

## Day 3

These stack problems were actually difficult for me to comprehend first try. Below is my implementation of NeetCode's solution.

## Stacks

The first solution of each problem is my attempt at solving with just intuition. It's likely not the most optimal solution. The second solution is what I learned from NeetCode's solution and then implementing it myself.

### [LeetCode 20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

#### Stack + Hashmap Solution --> O(n) time (_for loop_)

```javascript
//  @param {string} s
//  @return {boolean}
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (const c of s) {
    if (c in map) {
      if (stack.length > 0 && stack.at(-1) === map[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }
  return stack.length == 0;
};
```

- First we check to see if the length of the string is odd. If it's odd, we return false because there can't be closed pairs if the length is odd.
- Create our stack and a map for each closing parentheses and their corresponding open parenthesis.
  - Our stack will hold all of the open parentheses.
- Loop through each character of the string.
  - If the character is in `map`, it means it is a closing parenthesis
    - Size of `stack` must be > 0 because it would be `)`, which isn't valid.
    - We also need to check that the top value in the stack (most recent) is a corresponding open parenthesis.
      - Ex: `c = )`, top value of the stack must be `(`, which is `map[c]` --> `map["("]`.
    - If both conditions are true, then we can remove the open parenthesis from the stack.
      - If both are false, then there won't be matching pairs --> `return false`
  - If the character is not in `map`, it is an open parenthesis. We push this to the top of the stack.
- At the end, if the stack size is equal to 0, this means all the open parentheses had corresponding closing parentheses, we can `return true`. Otherwise, there weren't enough pairs, so the expression would `return false`.

This was a tough one :sweat_smile:! Took me rereading a bunch of times and rewatching the solution video to really understand the algorithm.

### [LeetCode 155. Min Stack](https://leetcode.com/problems/min-stack/)

#### Intuitive Solution --> O(n) time (_for loop_ + `reduce()`)

```javascript
//  @param {string[]} ops
//  @return {number}
var calPoints = function (ops) {
  let stack = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      stack.pop();
    } else if (ops[i] === "D") {
      stack.push(Number(stack[stack.length - 1]) * 2);
    } else if (ops[i] === "+") {
      stack.push(
        Number(stack[stack.length - 1]) + Number(stack[stack.length - 2])
      );
    } else {
      stack.push(Number(ops[i]));
    }
  }
  return stack.reduce((a, b) => a + b, 0);
};
```

- Create an array to represent a stack.
- If the operation is "C", we `pop()` the last element.
- If the operation is "D", we are going to `push()` double value of the last element in the stack.
- If the operation is "+", we are going to `push()` the sum of the last two elements in the stack.
- Otherwise, we can just add the element to the stack (since it must be a number).
  - We're wrapping the values with `Number()` because the provided operations are Strings and we must return a number.
- At the end, we can return the sum as a Number by using `reduce()`, which will sum all the elements in the stack.
- Note: My intuitive solution actually ended up being the same as NeetCode's :partying_face:!
