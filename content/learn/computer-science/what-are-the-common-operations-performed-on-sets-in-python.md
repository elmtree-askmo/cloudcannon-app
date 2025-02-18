---
_schema: default
id: 81182
date: 2024-12-03
title: >-
    What are the common operations performed on sets in Python?
article_title: >-
    What are the common operations performed on sets in Python?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Explore the common operations performed on sets in Python, including union, intersection, difference, and methods for adding or removing elements.
  page_keywords: >-
    Python, sets, union, intersection, difference, symmetric difference, add, remove, membership, length
author: QuickTakes
question: >-
    What are the common operations performed on sets in Python?
answer: >-
    In Python, sets are a powerful data structure that allows for various mathematical operations. Here are the common operations performed on sets:\n\n1. **Union**: This operation combines all unique elements from two sets. It can be performed using the `|` operator or the `union()` method. For example:\n   ```python\n   set_a = {1, 2, 3}\n   set_b = {3, 4, 5}\n   union_set = set_a | set_b  # or set_a.union(set_b)\n   ```\n\n2. **Intersection**: This operation returns only the elements that are common to both sets. It can be performed using the `&` operator or the `intersection()` method. For example:\n   ```python\n   intersection_set = set_a & set_b  # or set_a.intersection(set_b)\n   ```\n\n3. **Difference**: This operation returns the elements that are in the first set but not in the second. It can be performed using the `-` operator or the `difference()` method. For example:\n   ```python\n   difference_set = set_a - set_b  # or set_a.difference(set_b)\n   ```\n\n4. **Symmetric Difference**: This operation returns the elements that are in either of the sets but not in both. It can be performed using the `^` operator or the `symmetric_difference()` method. For example:\n   ```python\n   symmetric_difference_set = set_a ^ set_b  # or set_a.symmetric_difference(set_b)\n   ```\n\n5. **Adding Elements**: You can add a single element to a set using the `add()` method. To add multiple elements, you can use the `update()` method. For example:\n   ```python\n   set_a.add(4)\n   set_a.update([5, 6])\n   ```\n\n6. **Removing Elements**: Elements can be removed using the `remove()` method (which raises an error if the element is not found) or the `discard()` method (which does not raise an error). For example:\n   ```python\n   set_a.remove(4)  # Raises KeyError if 4 is not present\n   set_a.discard(5)  # Does not raise an error if 5 is not present\n   ```\n\n7. **Checking Membership**: You can check if an element is in a set using the `in` keyword. For example:\n   ```python\n   if 3 in set_a:\n       print("3 is in the set")\n   ```\n\n8. **Set Length**: You can find the number of elements in a set using the `len()` function. For example:\n   ```python\n   length = len(set_a)\n   ```\n\nThese operations make sets a versatile choice for handling collections of unique items in Python, especially when performing mathematical set operations.
subject: Computer Science
file_name: what-are-the-common-operations-performed-on-sets-in-python.md
url: /learn/computer-science/questions/what-are-the-common-operations-performed-on-sets-in-python
score: -1.0
related_article1:
    id: 81184
    title: >-
        What are some practical use cases for tuples in Python?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-some-practical-use-cases-for-tuples-in-python
related_article2:
    id: 81193
    title: >-
        What are the advantages and disadvantages of using lists over tuples and sets?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-advantages-and-disadvantages-of-using-lists-over-tuples-and-sets
related_article3:
    id: 81168
    title: >-
        What are the key characteristics of lists in Python?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-key-characteristics-of-lists-in-python
---

&nbsp;