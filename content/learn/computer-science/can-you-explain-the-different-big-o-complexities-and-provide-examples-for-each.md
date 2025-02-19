---
_schema: default
id: 52010
date: 2024-11-26
title: >-
    Can you explain the different Big O complexities and provide examples for each?
article_title: >-
    Can you explain the different Big O complexities and provide examples for each?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    An overview of different Big O complexities in algorithm analysis, including constant, logarithmic, linear, linearithmic, quadratic, exponential, and factorial time complexities with examples.
  page_keywords: >-
    Big O notation, time complexity, algorithms, O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n!), constant time, logarithmic time, linear time, linearithmic time, quadratic time, exponential time, factorial time, algorithm examples
author: QuickTakes
question: >-
    Can you explain the different Big O complexities and provide examples for each?
answer: >-
    Big O notation is a mathematical concept used in computer science to describe the time complexity of algorithms, particularly focusing on the worst-case scenario. It provides a way to analyze how the runtime of an algorithm increases as the size of the input data grows. Below are the most common types of Big O complexities along with their descriptions and examples:\n\n1. **O(1) - Constant Time**: \n   - **Description**: The execution time remains constant regardless of the input size. \n   - **Example**: Accessing an element in an array by index or returning a single value.\n   - **Illustration**: \n     ```python\n     def get_first_element(arr):\n         return arr[0]  # O(1)\n     ```\n\n2. **O(log n) - Logarithmic Time**: \n   - **Description**: The execution time increases logarithmically as the input size increases. This is typical in algorithms that divide the problem in half at each step, such as binary search.\n   - **Example**: Searching for a value in a sorted array using binary search.\n   - **Illustration**: \n     ```python\n     def binary_search(arr, target):\n         low, high = 0, len(arr) - 1\n         while low <= high:\n             mid = (low + high) // 2\n             if arr[mid] == target:\n                 return mid\n             elif arr[mid] < target:\n                 low = mid + 1\n             else:\n                 high = mid - 1\n         return -1  # O(log n)\n     ```\n\n3. **O(n) - Linear Time**: \n   - **Description**: The execution time increases linearly with the input size. This is common in algorithms that require a single pass through the data.\n   - **Example**: Finding the maximum value in an unsorted list.\n   - **Illustration**: \n     ```python\n     def find_max(arr):\n         max_value = arr[0]\n         for num in arr:\n             if num > max_value:\n                 max_value = num\n         return max_value  # O(n)\n     ```\n\n4. **O(n log n) - Linearithmic Time**: \n   - **Description**: The execution time increases in a linearithmic manner, often seen in efficient sorting algorithms like mergesort and heapsort.\n   - **Example**: Mergesort algorithm.\n   - **Illustration**: \n     ```python\n     def merge_sort(arr):\n         if len(arr) > 1:\n             mid = len(arr) // 2\n             left_half = arr[:mid]\n             right_half = arr[mid:]\n\n             merge_sort(left_half)\n             merge_sort(right_half)\n\n             i = j = k = 0\n             while i < len(left_half) and j < len(right_half):\n                 if left_half[i] < right_half[j]:\n                     arr[k] = left_half[i]\n                     i += 1\n                 else:\n                     arr[k] = right_half[j]\n                     j += 1\n                 k += 1\n\n             while i < len(left_half):\n                 arr[k] = left_half[i]\n                 i += 1\n                 k += 1\n\n             while j < len(right_half):\n                 arr[k] = right_half[j]\n                 j += 1\n                 k += 1\n         return arr  # O(n log n)\n     ```\n\n5. **O(n^2) - Quadratic Time**: \n   - **Description**: The execution time increases quadratically with the input size, often seen in algorithms that involve nested iterations over the data.\n   - **Example**: Bubble sort or selection sort.\n   - **Illustration**: \n     ```python\n     def bubble_sort(arr):\n         n = len(arr)\n         for i in range(n):\n             for j in range(0, n-i-1):\n                 if arr[j] > arr[j+1]:\n                     arr[j], arr[j+1] = arr[j+1], arr[j]\n         return arr  # O(n^2)\n     ```\n\n6. **O(2^n) - Exponential Time**: \n   - **Description**: The execution time doubles with each additional element in the input. This is often seen in recursive algorithms that solve problems by solving smaller instances of the same problem.\n   - **Example**: Calculating Fibonacci numbers using naive recursion.\n   - **Illustration**: \n     ```python\n     def fibonacci(n):\n         if n <= 1:\n             return n\n         return fibonacci(n-1) + fibonacci(n-2)  # O(2^n)\n     ```\n\n7. **O(n!) - Factorial Time**: \n   - **Description**: The execution time grows factorially with the input size, which is extremely inefficient and typically seen in algorithms that generate all permutations of a set.\n   - **Example**: Solving the traveling salesman problem using brute force.\n   - **Illustration**: \n     ```python\n     from itertools import permutations\n\n     def traveling_salesman(cities):\n         min_cost = float('inf')\n         for perm in permutations(cities):\n             cost = calculate_cost(perm)  # O(n!)\n             if cost < min_cost:\n                 min_cost = cost\n         return min_cost\n     ```\n\nUnderstanding these complexities is crucial for analyzing and designing efficient algorithms, especially in technical interviews and practical applications in computer science and data science.
subject: Computer Science
file_name: can-you-explain-the-different-big-o-complexities-and-provide-examples-for-each.md
url: /learn/computer-science/questions/can-you-explain-the-different-big-o-complexities-and-provide-examples-for-each
score: -1.0
related_article1:
    id: 52021
    title: >-
        What is the difference between abstract data types and data structures?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-difference-between-abstract-data-types-and-data-structures
related_article2:
    id: 52040
    title: >-
        How are hash maps and hash tables used in data science applications?
    subject: Computer Science
    url: /learn/computer-science/questions/how-are-hash-maps-and-hash-tables-used-in-data-science-applications
related_article3:
    id: 52030
    title: >-
        How does binary search improve over linear search in terms of time complexity?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-binary-search-improve-over-linear-search-in-terms-of-time-complexity
---

&nbsp;