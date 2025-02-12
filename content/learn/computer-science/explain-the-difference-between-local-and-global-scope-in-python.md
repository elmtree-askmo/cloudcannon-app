---
_schema: default
id: 168593
date: 2025-02-03
title: >-
    Explain the difference between local and global scope in Python.
article_title: >-
    Explain the difference between local and global scope in Python.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains the difference between local and global scope in Python, detailing their definitions, accessibility, lifetime, and providing code examples to illustrate their usage.
  page_keywords: >-
    Python, local scope, global scope, variable visibility, variable lifetime, functions, programming, local variables, global variables, accessibility, example
author: QuickTakes
question: >-
    Explain the difference between local and global scope in Python.
answer: >-
    In Python, the concept of scope refers to the visibility and lifetime of variables within different parts of a program. There are two primary types of scope: **local scope** and **global scope**.\n\n### Local Scope\nLocal variables are defined within a function and can only be accessed inside that function. This means that once the function execution is complete, the local variables are destroyed and cannot be accessed outside of that function. For example:\n\n```python\ndef my_function():\n    local_var = 5  # This is a local variable\n    print(local_var)  # Accessible within the function\n\nmy_function()\n# print(local_var)  # This would raise an error because local_var is not accessible here\n```\n\n### Global Scope\nGlobal variables, on the other hand, are defined outside of any function and can be accessed from anywhere in the program, including inside functions. This allows for a broader visibility of the variable. For example:\n\n```python\nglobal_var = 10  # This is a global variable\n\ndef my_function():\n    print(global_var)  # Accessible within the function\n\nmy_function()\nprint(global_var)  # Accessible outside the function\n```\n\n### Key Differences\n1. **Definition Location**:\n   - Local variables are defined within a function.\n   - Global variables are defined outside of any function.\n\n2. **Accessibility**:\n   - Local variables can only be accessed within the function they are defined in.\n   - Global variables can be accessed from anywhere in the program.\n\n3. **Lifetime**:\n   - Local variables exist only during the execution of the function.\n   - Global variables exist for the duration of the program.\n\n### Example\nHere’s a combined example to illustrate both scopes:\n\n```python\nx = 5  # Global variable\n\ndef my_function():\n    y = 10  # Local variable\n    print("Inside function:")\n    print("Global variable x:", x)  # Accessing global variable\n    print("Local variable y:", y)    # Accessing local variable\n\nmy_function()\nprint("Outside function:")\nprint("Global variable x:", x)  # Accessible\n# print("Local variable y:", y)  # This would raise an error\n```\n\nIn this example, `x` is a global variable and can be accessed both inside and outside the function, while `y` is a local variable and can only be accessed within `my_function`.\n\nUnderstanding the difference between local and global scope is crucial for managing variable visibility and avoiding potential conflicts in larger programs.
subject: Computer Science
file_name: explain-the-difference-between-local-and-global-scope-in-python.md
url: /learn/computer-science/questions/explain-the-difference-between-local-and-global-scope-in-python
score: -1.0
related_article1:
    id: 168599
    title: >-
        How can you provide default values for function parameters in Python?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-provide-default-values-for-function-parameters-in-python
related_article2:
    id: 168599
    title: >-
        How can you provide default values for function parameters in Python?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-provide-default-values-for-function-parameters-in-python
related_article3:
    id: 168591
    title: >-
        Name two common functions available in Python's math module.
    subject: Computer Science
    url: /learn/computer-science/questions/name-two-common-functions-available-in-pythons-math-module
related_article4:
    id: 168604
    title: >-
        What are some best practices for writing Python functions?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-some-best-practices-for-writing-python-functions
related_article5:
    id: 168589
    title: >-
        What is the syntax for defining a function in Python?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-syntax-for-defining-a-function-in-python
---

&nbsp;