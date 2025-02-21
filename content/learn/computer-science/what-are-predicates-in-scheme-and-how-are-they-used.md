---
_schema: default
id: 17180
date: 2024-11-22
title: >-
    What are predicates in Scheme and how are they used?
article_title: >-
    What are predicates in Scheme and how are they used?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    In Scheme, predicates are procedures that return true or false values, essential for type checking and logical conditions, allowing for robust programs.
  page_keywords: >-
    predicates, Scheme, boolean value, type predicates, equality predicates, custom predicates, conditional expressions, filtering data, even numbers, programming, functional programming
author: QuickTakes
question: >-
    What are predicates in Scheme and how are they used?
answer: >-
    In Scheme, predicates are procedures that evaluate a condition and return a boolean value, either `#t` (true) or `#f` (false). They are essential for checking properties of values and determining whether certain criteria are met. Predicates can be named in a way that reflects their purpose, typically ending with a question mark to indicate their function as a boolean check. For example, `pair?`, `number?`, and `list?` are common built-in predicates used to test whether a given value is a pair, a number, or a list, respectively.\n\n### Types of Predicates in Scheme\n\n1. **Type Predicates**: These are built-in procedures that check if a value belongs to a specific type. For instance:\n   - `(pair? x)` checks if `x` is a pair.\n   - `(number? x)` checks if `x` is a number.\n   - `(list? x)` checks if `x` is a list.\n\n   These predicates are particularly useful when working with custom data types, as they allow programmers to determine the type of a value without needing to define classes or prototypes.\n\n2. **Equality Predicates**: Scheme also provides predicates to check if two values are considered equal. The most common equality predicates are:\n   - `eq?`: Tests if two values are the same object.\n   - `eqv?`: Tests if two values are equivalent, considering some types of values as equal.\n   - `equal?`: Tests for structural equality, meaning it checks if two data structures have the same content.\n   - `=`: Specifically used for numeric equality.\n\n### Defining Custom Predicates\n\nIn addition to the built-in predicates, users can define their own predicates to check for specific conditions. A custom predicate is simply a function that returns a boolean value. For example:\n\n```scheme\n(define (even? n)\n  (= (modulo n 2) 0))\n```\n\nThis `even?` predicate checks if a number is even by using the modulo operation.\n\n### Usage of Predicates\n\nPredicates are widely used in conditional expressions, filtering data, and controlling the flow of programs. For example, they can be used in `if` statements or in higher-order functions like `filter` to process lists based on certain criteria.\n\n### Example\n\nHere’s a simple example demonstrating the use of predicates in a Scheme program:\n\n```scheme\n(define (sum-of-pairs lst)\n  (if (null? lst)\n      0\n      (if (pair? (car lst))\n          (+ (car (car lst)) (sum-of-pairs (cdr lst)))\n          (sum-of-pairs (cdr lst)))))\n```\n\nIn this example, `sum-of-pairs` uses the `pair?` predicate to check if the first element of the list is a pair before attempting to sum its elements.\n\nIn summary, predicates in Scheme are fundamental tools for type checking and logical evaluation, enabling programmers to write more robust and type-safe code. They play a crucial role in functional programming paradigms by allowing for clear and concise expressions of conditions.
subject: Computer Science
file_name: what-are-predicates-in-scheme-and-how-are-they-used.md
url: /learn/computer-science/questions/what-are-predicates-in-scheme-and-how-are-they-used
score: -1.0

---

&nbsp;