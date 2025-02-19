---
_schema: default
id: 51957
date: 2024-11-26
title: >-
    Can you explain linear time complexity (O(n)) with examples?
article_title: >-
    Can you explain linear time complexity (O(n)) with examples?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Linear time complexity (O(n)) describes algorithms where the time taken increases linearly with the input size, with examples like linear search and finding max/min values.
  page_keywords: >-
    linear time complexity, O(n), algorithm efficiency, linear search, find maximum, find minimum, print values, input size, operations count, data structures, algorithms
author: QuickTakes
question: >-
    Can you explain linear time complexity (O(n)) with examples?
answer: >-
    Linear time complexity, denoted as O(n), indicates that the time taken by an algorithm increases linearly with the size of the input data. This means that if the input size doubles, the time taken to complete the algorithm also doubles. In simpler terms, the number of operations performed is directly proportional to the number of elements in the input.\n\n### Examples of O(n) Time Complexity\n\n1. **Linear Search**: A classic example of O(n) time complexity is the linear search algorithm. In this algorithm, each element in an array is checked sequentially against a target value. If the array has n elements, in the worst case, the algorithm will need to check all n elements, resulting in a time complexity of O(n).\n\n   ```python\n   def linear_search(arr, target):\n       for i in range(len(arr)):\n           if arr[i] == target:\n               return i  # Return the index of the target\n       return -1  # Target not found\n   ```\n\n2. **Finding Maximum or Minimum Value**: Another example is finding the maximum or minimum value in an unsorted array. The algorithm must examine each element to determine the maximum or minimum, leading to a time complexity of O(n).\n\n   ```python\n   def find_max(arr):\n       max_value = arr[0]\n       for num in arr:\n           if num > max_value:\n               max_value = num\n       return max_value\n   ```\n\n3. **Printing All Values in a List**: If you need to print all the values in a list, you will iterate through each element, which also results in O(n) time complexity.\n\n   ```python\n   def print_list(arr):\n       for item in arr:\n           print(item)\n   ```\n\n### Summary\n\nIn summary, linear time complexity (O(n)) is characterized by algorithms that require a number of operations proportional to the size of the input. This is common in algorithms that involve searching or iterating through data structures like arrays or lists. Understanding O(n) is crucial for evaluating the efficiency of algorithms, especially when dealing with larger datasets.
subject: Computer Science
file_name: can-you-explain-linear-time-complexity-on-with-examples.md
url: /learn/computer-science/questions/can-you-explain-linear-time-complexity-on-with-examples
score: -1.0
related_article1:
    id: 51955
    title: >-
        Can you provide examples of algorithms with constant time complexity (O(1))?
    subject: Computer Science
    url: /learn/computer-science/questions/can-you-provide-examples-of-algorithms-with-constant-time-complexity-o1
related_article2:
    id: 51977
    title: >-
        How can students get additional support if they struggle with course material?
    subject: Education Studies
    url: /learn/education-studies/questions/how-can-students-get-additional-support-if-they-struggle-with-course-material
---

&nbsp;