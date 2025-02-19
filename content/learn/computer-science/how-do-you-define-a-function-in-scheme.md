---
_schema: default
id: 47359
date: 2024-11-25
title: >-
    How do you define a function in Scheme?
article_title: >-
    How do you define a function in Scheme?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Learn how to define a function in Scheme using the define keyword, including examples and syntax for simple and nested functions.
  page_keywords: >-
    function definition, Scheme, define keyword, functional programming, syntax, parameters, function body, nested functions, Scheme example, plus function, plus-plus function
author: QuickTakes
question: >-
    How do you define a function in Scheme?
answer: >-
    In Scheme, a function can be defined using the `define` keyword, which binds a name to a function object. The syntax for defining a function is as follows:\n\n```scheme\n(define (function-name parameters)\n  body)\n```\n\nHere, `function-name` is the name you want to give to your function, `parameters` are the inputs to the function, and `body` is the expression that defines what the function does.\n\nFor example, to define a simple function that adds two numbers, you would write:\n\n```scheme\n(define (plus a b)\n  (+ a b))\n```\n\nIn this case, `plus` is the function name, and it takes two parameters, `a` and `b`. The body of the function uses the built-in `+` operator to return the sum of `a` and `b`.\n\nYou can also define functions with multiple parameters easily:\n\n```scheme\n(define (plus-plus a b c)\n  (+ a b c))\n```\n\nThis function, `plus-plus`, takes three parameters and returns their sum.\n\nAdditionally, Scheme allows for nested function definitions, meaning you can define a function within another function. This is useful for creating helper functions that are only relevant within the context of the outer function.\n\nOverall, defining functions in Scheme is straightforward and follows a consistent syntax that emphasizes the functional programming paradigm.
subject: Computer Science
file_name: how-do-you-define-a-function-in-scheme.md
url: /learn/computer-science/questions/how-do-you-define-a-function-in-scheme
score: -1.0

---

&nbsp;