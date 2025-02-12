---
_schema: default
id: 131625
date: 2024-12-17
title: >-
    What is a void return type and when is it used in functions?
article_title: >-
    What is a void return type and when is it used in functions?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains the void return type in C++, its purpose, and when it is typically used in functions. It discusses characteristics of void functions, including no return value and early exit capabilities.
  page_keywords: >-
    void, return type, C++, functions, no return value, procedural functions, early exit, characteristics, function declaration
author: QuickTakes
question: >-
    What is a void return type and when is it used in functions?
answer: >-
    In C++, a function with a return type of `void` indicates that the function does not return a value. This means that when the function is called, it performs its operations but does not provide any data back to the caller. The `void` return type is commonly used in functions that are intended to perform actions rather than compute and return a value.\n\n### When to Use `void` Return Type\n\n1. **Procedural Functions**: Functions that perform a task, such as printing output or modifying data, often use `void`. For example, a function that displays a message to the user does not need to return any value.\n\n   ```cpp\n   void greet() {\n       std::cout << "Hello, World!" << std::endl;\n   }\n   ```\n\n2. **Early Exit**: While a `void` function does not return a value, it can still use the `return` statement to exit the function early. This is useful for terminating the function under certain conditions without returning any data.\n\n   ```cpp\n   void checkValue(int x) {\n       if (x < 0) {\n           std::cout << "Negative value!" << std::endl;\n           return; // Early exit\n       }\n       std::cout << "Value is: " << x << std::endl;\n   }\n   ```\n\n3. **No Parameters**: A `void` return type can also be used in functions that take no parameters, indicating that the function does not require any input to perform its task.\n\n### Characteristics of `void` Functions\n\n- **No Return Value**: A `void` function cannot return a value. If a return statement is used, it must not include an expression. However, it is possible to use `return;` to exit the function without returning a value.\n\n- **Implicit Return**: If a `void` function reaches the end of its body without encountering a return statement, it implicitly returns control to the caller.\n\n- **Function Declaration**: The syntax for declaring a `void` function is similar to other functions, with the return type specified as `void`.\n\n   ```cpp\n   void myFunction() {\n       // Function body\n   }\n   ```\n\nIn summary, the `void` return type is used in functions that do not need to return a value, making it suitable for procedures that perform actions or modify data without providing feedback to the caller.
subject: Computer Science
file_name: what-is-a-void-return-type-and-when-is-it-used-in-functions.md
url: /learn/computer-science/questions/what-is-a-void-return-type-and-when-is-it-used-in-functions
score: -1.0
related_article1:
    id: 131632
    title: >-
        What are the main parts of a function in C++?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-main-parts-of-a-function-in-c
related_article2:
    id: 131628
    title: >-
        Can you provide the syntax for defining a user-defined function in C++?
    subject: Computer Science
    url: /learn/computer-science/questions/can-you-provide-the-syntax-for-defining-a-userdefined-function-in-c
related_article3:
    id: 131635
    title: >-
        In what ways do functions improve code readability?
    subject: Computer Science
    url: /learn/computer-science/questions/in-what-ways-do-functions-improve-code-readability
related_article4:
    id: 131626
    title: >-
        How do you define a user-defined function in C++?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-define-a-userdefined-function-in-c
related_article5:
    id: 131646
    title: >-
        What are some practical programming tasks that can be solved using C++ functions?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-some-practical-programming-tasks-that-can-be-solved-using-c-functions
---

&nbsp;