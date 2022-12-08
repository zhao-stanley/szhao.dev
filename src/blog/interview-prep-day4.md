---
title: Interview Prep Day 4
date: "12/6/2022"
draft: true
desc: "Analyzing linked list problems. These are Leetcode problems 206 and 155."
genre: ["dsa", "stacks"]
---

## Day 4

### [LeetCode 206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list)

#### Two Pointer Solution --> O(n) time (_while loop_)

```javascript
//  @param {ListNode} head
//  @return {ListNode}
var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
```

- I'll use `[1,2,3,4,5]` as an example for our linked list.
- `head` provides us the reference to the very beginning element of our linked list
  - Declare `prev` as null, `curr` as `head`, and `next` as `null`.
   - We will keep executing until we reach the end of the linked list (when we end up at null)
- We set `next` equal to `curr.next`, which would be **2**.
- Set `curr.next` equal to `prev`, which starts as **null**.
- Now set `prev` equal to `curr`, which is currently **1**.
- Set `curr` equal to `next`, which is **2**.
- What ends up happening is our current element is now **2** and it's `.next` is pointing towards 1.

This problem was conceptually challenging. The idea of list elements changing order while holding references was confusing :sweat_smile:. Definitely need to study these.

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
