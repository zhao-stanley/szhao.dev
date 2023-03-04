---
title: Interview Prep Day 2
date: "12/4/2022"
draft: false
desc: "Analyzing some dynamic array and stack problems. These are Leetcode problems 1929 and 682."
genre: ["dsa", "arrays", "stacks"]
---

## Day 2!

The grind never stops! Yesterday I did static arrays and today I'm finishing the array topic with dynamic arrays and stacks! I've personally never learned anything about stacks so this is a new topic for me.

## Dynamic Arrays

The first solution of each problem is my attempt at solving with just intuition. It's likely not the most optimal solution. The second solution is what I learned from NeetCode's solution and then implementing it myself.

### [LeetCode 1929. Remove Duplicates from Sorted Array](https://leetcode.com/problems/concatenation-of-array/)

#### Intuitive Solution --> O(n) time (`concat()`)

```javascript
//  @param {number[]} nums
//  @return {number[]}
var getConcatenation = function (nums) {
  let ans = nums.concat(nums);
  return ans;
};
```

- With JavaScript, this is a pretty quick solution. The native `concat()` method should take O(n) time since the arrays are the same size.
- I concatenated the original array `nums` with itself to duplicate it and then returned `ans`, which is what it's initialized to.
- Note: `concat()` actually has a [worst-case time complexity of O(n + m) if two arrays have different sizes](<https://medium.com/@ashfaqueahsan61/time-complexities-of-common-array-operations-in-javascript-c11a6a65a168#:~:text=Lastly%2C%20I%20want%20to%20talk%20a%20little%20bit%20about%20the%20Array.concat()%20method.>).

#### No Native Methods Solution --> O(n) time (_for loop_)

```javascript
//  @param {number[]} nums
//  @return {number}
var getConcatenation = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length * 2; i++) {
    ans[i] = nums[i % nums.length];
  }
  return ans;
};
```

- This is a "real" solution if we weren't using JavaScript's native methods.
- Since `ans` will be double the size, we'll loop through `num.length * 2`.
  - We'll set the element of `ans` to be the element of `nums` but modulo the size of the `nums` array.
    - Example: `ans[1] = nums[1 % 3]` is the same as `ans[1] = nums[1]`.
      - `ans[3] = nums[3 % 3]` is the same as `ans[3] = nums[0]`, which is what we want.

## Stacks

New topic! Turns out we can use dynamic arrays to implement stacks. They're LIFO, which means Last In, First Out. The last element to be inserted into the stack is the first one to be removed. NeetCode's curriculum has 3 recommended problems to go along with stacks, so below are my solutions to them. For reference, they are LeetCode problems [682](https://leetcode.com/problems/baseball-game/), [20](https://leetcode.com/problems/valid-parentheses/), and [155](https://leetcode.com/problems/min-stack/) (medium problem :eyes:).

### [LeetCode 682. Baseball Game](https://leetcode.com/problems/baseball-game/)

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