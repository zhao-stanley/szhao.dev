---
title: Interview Prep Day 3
date: "12/5/2022"
draft: false
desc: "Analyzing some more stack problems. These are Leetcode problems 20 and 155."
genre: ["dsa", "stacks"]
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

#### Intuitive Solution --> O(n) time (_spread operator (...)_)

```javascript
let MinStack = class {
  constructor() {
    this.stack = [];
  }
};

//  @param {number} val
//  @return {void}
MinStack.prototype.push = function (val) {
  this.stack.push(val);
};

//  @return {void}
MinStack.prototype.pop = function () {
  this.stack.pop();
};

//  @return {number}
MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

//  @return {number}
MinStack.prototype.getMin = function () {
  return Math.min(...this.stack);
};
```

- Initialized a stack in the constructor
- Used the built in functions for `push()` and `pop()`, which should be O(1) time complexity.
- `at(-1)` gives the last element of the stack
- `Math.min()` returns the minimum value of a bunch of provided values. Using the `...` spread operator is actually O(n), which isn't optimal.
  Each function is supposed to be O(1), which I did not accomplish. Let's see what NeetCode's solution is!

#### Two Stacks Solution --> O(1) time (normal stack operations)

```javascript
let MinStack = class {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
};

//  @param {number} val
//  @return {void}
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.minStack.length == 0 || this.minStack.at(-1) >= val) {
    this.minStack.push(val);
  }
};

//  @return {void}
MinStack.prototype.pop = function () {
  let topOfStack = this.stack.pop();
  let minVal = this.minStack.at(-1);
  if (topOfStack == minVal) {
    this.minStack.pop();
  }
};

//  @return {number}
MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

//  @return {number}
MinStack.prototype.getMin = function () {
  return this.minStack.at(-1);
};
```

- Initialize two stacks. First stack will be the general stack we return. The second stack, `minStack`, will keep track of the minimum values that are pushed to the stack.
  - The top value of `minStack` will always be the minimum value.
- When we push, we check two conditions for `minStack`. If either are true, we will also push `val` to `minStack`.
  - If `minStack` has no elements yet, we can push `val` to be the first minimum value.
  - If the top element of `minStack` is greater than or equal to `val`, we can push `val` because it's less than or equal to.
    - We push `val` even if it may equal because there may be two of the same values, and one of them might be removed.
      - Example: We push two 3's into `stack` but only 3 once in `minStack`. If we `pop()` a 3, minStack is empty, even though the minimum value is still 3.
- We can keep track of what element we popped from `stack`. If this element is equal to the element at the top of `minStack`, then we also remove the element from `minStack`.
- For our `getMin` function, we can return the element at the top of `minStack` because the **topmost element must be the minimum value**.
