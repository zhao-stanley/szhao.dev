---
title: Interview Prep Day 4
date: "12/6/2022"
draft: false
desc: "Analyzing a linked list problem. This is LeetCode problem 206."
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
