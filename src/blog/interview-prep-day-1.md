---
title: Interview Prep Day 1
date: "12/3/2022"
draft: false
desc: "Analyzing some array problems. These are Leetcode problems 26 and 27."
genre: ["dsa", "arrays"]
---

## Introduction

I was very fortunate to receive a response from [Vercel](https://vercel.com/home) about an internship position I applied for a couple weeks ago.

Being a self-taught dev, I find myself most proficient with the tech I use in projects that interest me. For instance, Next.js and Tailwind are familiar territory because of how much I use them in my projects. However, I knew that I'd need to brush up on algorithms and data structures if I wanted to try my best for the interview.

Having software engineer friends and reading other people's testimonials online have made it clear to me that the technical interview is something that requires practice and preparation. I don't typically use those skills/concepts in my day-to-day developer life either, which makes it harder to learn and retain. Given that I have just over a week to prep, I've decided to study as much as I can with the goal of learning as much from this experience as possible. In the process, I'll be "taking notes" by writing about the problems I do everyday in my blog!

If I'm being realistic, I don't know if I can pass the technical portion of the interview considering I'm still a senior in high school. Regardless, I want to make the best out of it and hopefully absorb as much as I can. It's a cool experience to get my first technical interview and who knows, maybe I'll get lucky :joy:!

In order to prepare, I decided to invest in a [NeetCode](https://neetcode.io) lifetime pro plan (not sponsored or anything), which I thought would be worth it in the long run anyways. I plan on writing all my solutions in JavaScript to get more familiar with syntax I haven't yet learned as well as use something I'm more comfortable with (I'm not comfortable using C++ in the interview :sweat_smile:)

## Static Arrays

First topic of NeetCodes' curriculum are static arrays. I would like to think I'm familiar with arrays but there's always more to learn. Below are my solutions to LeetCode problems 26 and 27.
The first solution of each problem is my attempt at solving with just intuition. It's likely not the most optimal solution. The second solution is what I learned from NeetCode's solution and then implementing it myself.

### [LeetCode 26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

#### Intuitive Solution --> O(n^3) time (_for loop x while loop x splice()_)

```javascript
//  @param {number[]} nums
//  @return {number}
var removeDuplicates = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    while (nums[i] == nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
```

The problem said to modify the original array rather than allocate extra memory for a new one.

- Loop through `nums`. Start at index 1 to compare the preceding item.
  - If the preceding item is the same, remove the current item since it's a duplicate.
- While the condition of `nums[i] == nums[i-1]` is true, we'll keep splicing (or in this case removing) the duplicate numbers that follow the original.
  - `splice()` syntax --> `splice(index, # of items, [replacement])`
    - Left the last argument blank to just remove the item completely rather than replacing it with anything.
- Since I removed the elements rather than replacing them, the array size is also changed, so I can just return the size when it's done.
- Note: `splice()` actually has a [worst-case time complexity of O(n)](https://stackoverflow.com/questions/62090988/what-is-the-time-complexity-of-array-splice-array-splice)

#### Two Pointers Solution --> O(n) time (_for loop_)

```javascript
//  @param {number[]} nums
//  @return {number}
var removeDuplicates = function (nums) {
  let l = 1;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] != nums[r - 1]) {
      nums[l] = nums[r];
      l++;
    }
  }
  return l;
};
```

- This solution I use two pointers instead, which is much faster than my intuitive solution.
- We use left and right pointers to keep track of elements
  - Left pointer will keep track of the most recent unique element
  - Right pointer will be the position where we are comparing elements
- Starting both pointers at index 1 because the `nums` is already sorted in increasing order.
- Using for loop because we need to increment the right pointer everytime anyways.
  - When we encounter a new unique element, we'll set the element at the left pointer equal to the new unique element (which is the right pointer).
    - Then increment the position of the left pointer to indicate where the next unique element should go
- The left pointer corresponds to where each unique element should go in ascending order. This also means the **value of the left pointer tells us how many unique elements there are**.
  - We can return this value when we are done looping through the entire array.

### [LeetCode 27. Remove Element](https://leetcode.com/problems/remove-element/)

#### Intuitive Solution --> O(n) time (_for loop_)

```javascript
//  @param {number[]} nums
//  @param {number} val
//  @return {number}
var removeElement = function (nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
```

- Objective is to remove all elements that match `val`. The issue with splicing it forward is that the index changes, which can cause the loop to skip past a value if it occurs more than two times.
- Loop through starting from the last element
  - If it's equal to the value we want to remove, we'll remove it
- `splice()` will decrease the array size by 1, but the for loop condition makes sure it's not out of bounds anyways thanks to `nums.length - 1`.

#### Two Pointers Solution --> O(n) time (_for loop_)

```javascript
//  @param {number[]} nums
//  @param {number} val
//  @return {number}
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
```

- The problem actually says not to change the array size. This solution also ends up working.
  - That's the thing with high level languages like Python and JavaScript --> I can change the size of the array because they're dynamic!
- We keep one pointer representing the first instance of an element in the array that matches `val` (what we want to remove)
- Loop through the array
  - If the current element is not equal to `val`, we can replace the `k` element with something that isn't `val` from the array
    - Why does this work? --> if there are no elements that match `val`, all the elements will replace themselves, which is okay.
    - If there are elements that match `val`, they'll be replaced by other elements in the array, which is fine.
- The `k` pointer keeps track of how many unique elements there are, since it only increments when an array element **does not equal `val`**, so we can return it at the end.
