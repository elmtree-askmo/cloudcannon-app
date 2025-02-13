---
_schema: default
id: 168601
date: 2025-02-03
title: >-
    How can you access a function's docstring in Python?
article_title: >-
    How can you access a function's docstring in Python?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Learn how to access a function's docstring in Python using the __doc__ attribute, including an example with a custom function.
  page_keywords: >-
    Python, function, docstring, access, __doc__, example, documentation, return values, code, programming
author: QuickTakes
question: >-
    How can you access a function's docstring in Python?
answer: >-
    In Python, you can access a function's docstring using the `.__doc__` attribute. The docstring is a special string that describes the function's purpose, parameters, and return values, and it is placed immediately after the function definition.\n\nHere’s an example to illustrate how to access a function's docstring:\n\n```python\ndef add(a, b):\n    """Returns the sum of a and b."""\n    return a + b\n\n# Accessing the docstring\nprint(add.__doc__)  # Output: Returns the sum of a and b.\n```\n\nIn this example, the `add` function has a docstring that explains what the function does. By using `add.__doc__`, you can retrieve and print this documentation string. This feature is particularly useful for understanding the functionality of functions, especially when working with larger codebases or libraries.
subject: Computer Science
file_name: how-can-you-access-a-functions-docstring-in-python.md
url: /learn/computer-science/questions/how-can-you-access-a-functions-docstring-in-python
score: -1.0
related_article1:
    id: 168589
    title: >-
        What is the syntax for defining a function in Python?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-syntax-for-defining-a-function-in-python
related_article2:
    id: 168598
    title: >-
        What is the difference between positional and keyword parameters in Python functions?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-difference-between-positional-and-keyword-parameters-in-python-functions
related_article3:
    id: 168605
    title: >-
        How can you import and use a module in Python?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-import-and-use-a-module-in-python
related_article4:
    id: 168607
    title: >-
        What is modular programming and how does it enhance reusability?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-modular-programming-and-how-does-it-enhance-reusability
---

&nbsp;