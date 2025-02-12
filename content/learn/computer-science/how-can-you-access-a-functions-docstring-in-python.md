---
_schema: default
id: 168601
date: 2025-02-03
title: How can you access a function's docstring in Python?
article_title: How can you access a function's docstring in Python?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Learn how to access a function's docstring in Python using the .__doc__ attribute, along with an illustrative example.
  page_keywords: >-
    Python,function,docstring,access,.__doc__,documentation,string,example
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
    id: 168587
    title: What are the benefits of using functions in software development?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-benefits-of-using-functions-in-software-development
related_article2:
    id: 168588
    title: How does object-oriented programming contribute to software reusability?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-objectoriented-programming-contribute-to-software-reusability
related_article3:
    id: 168588
    title: How does object-oriented programming contribute to software reusability?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-objectoriented-programming-contribute-to-software-reusability
related_article4:
    id: 168599
    title: How can you provide default values for function parameters in Python?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-provide-default-values-for-function-parameters-in-python
related_article5:
    id: 168598
    title: What is the difference between positional and keyword parameters in Python functions?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-difference-between-positional-and-keyword-parameters-in-python-functions
---

&nbsp;