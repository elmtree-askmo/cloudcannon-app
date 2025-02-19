---
_schema: default
id: 51955
date: 2024-11-26
title: >-
    Can you provide examples of algorithms with constant time complexity (O(1))?
article_title: >-
    Can you provide examples of algorithms with constant time complexity (O(1))?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Examples of algorithms with constant time complexity (O(1)), including array access, hash table operations, stack and queue operations, and more.
  page_keywords: >-
    constant time complexity,O(1),algorithms,array access,hash table operations,stack operations,queue operations,binary tree,even or odd check
author: QuickTakes
question: >-
    Can you provide examples of algorithms with constant time complexity (O(1))?
answer: >-
    Examples of algorithms with constant time complexity, denoted as O(1), are those that execute in the same amount of time regardless of the size of the input. Here are some common examples:\n\n1. **Accessing an Array Element**: Retrieving an element from an array using its index is a classic O(1) operation. For example:\n   ```python\n   value = array[index]\n   ```\n\n2. **Inserting or Deleting from a Hash Table**: Operations such as inserting a key-value pair or looking up a value by its key in a hash table typically exhibit constant time complexity. For instance:\n   ```python\n   hash_table[key] = value  # Insertion\n   value = hash_table[key]  # Lookup\n   ```\n\n3. **Finding the First or Last Element of an Array**: Accessing the first or last element of an array is also an O(1) operation:\n   ```python\n   first_element = array[0]\n   last_element = array[-1]\n   ```\n\n4. **Checking if a Number is Even or Odd**: This operation takes a constant amount of time:\n   ```python\n   def is_even(n):\n       return n % 2 == 0\n   ```\n\n5. **Pushing and Popping from a Stack**: Both operations on a stack (using an array or linked list) are O(1):\n   ```python\n   stack.append(item)  # Push\n   item = stack.pop()  # Pop\n   ```\n\n6. **Insertion and Removal from a Queue**: Similar to stacks, enqueueing and dequeueing operations in a queue can be performed in constant time:\n   ```python\n   queue.append(item)  # Enqueue\n   item = queue.pop(0)  # Dequeue\n   ```\n\n7. **Finding Parent or Child Nodes in a Binary Tree Stored in an Array**: If a binary tree is represented as an array, finding the parent or child nodes can be done in constant time:\n   ```python\n   parent_index = (index - 1) // 2  # Parent\n   left_child_index = 2 * index + 1  # Left Child\n   right_child_index = 2 * index + 2  # Right Child\n   ```\n\nThese examples illustrate how O(1) algorithms maintain a constant execution time, making them efficient for various applications.
subject: Computer Science
file_name: can-you-provide-examples-of-algorithms-with-constant-time-complexity-o1.md
url: /learn/computer-science/questions/can-you-provide-examples-of-algorithms-with-constant-time-complexity-o1
score: -1.0
related_article1:
    id: 51977
    title: >-
        How can students get additional support if they struggle with course material?
    subject: Education Studies
    url: /learn/education-studies/questions/how-can-students-get-additional-support-if-they-struggle-with-course-material
---

&nbsp;