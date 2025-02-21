---
_schema: default
id: 16660
date: 2024-11-22
title: >-
    How does the `cond` statement differ from the `if` statement in Scheme?
article_title: >-
    How does the `cond` statement differ from the `if` statement in Scheme?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This explanation details the differences between the 'if' and 'cond' statements in Scheme, highlighting their syntax, usage for handling conditional execution, and key distinctions in handling multiple conditions versus binary conditions.
  page_keywords: >-
    Scheme, conditional statements, if statement, cond statement, differences, syntax, multiple conditions, readability, return values, programming, Lisp
author: QuickTakes
question: >-
    How does the `cond` statement differ from the `if` statement in Scheme?
answer: >-
    In Scheme, both the `cond` and `if` statements are used for conditional execution, but they differ significantly in their structure and usage.\n\n### `if` Statement\nThe `if` statement in Scheme is a basic conditional expression that evaluates a single condition and executes one of two branches based on whether the condition is true or false. Its general syntax is:\n\n```scheme\n(if <test> <consequent> <alternative>)\n```\n\n- **Test**: This is the condition being evaluated.\n- **Consequent**: This expression is evaluated if the test is true.\n- **Alternative**: This expression is evaluated if the test is false.\n\nThe `if` statement returns the value of the evaluated branch. For example:\n\n```scheme\n(if (> x 0) 'positive 'non-positive)\n```\n\nIn this case, if `x` is greater than 0, it returns `'positive`; otherwise, it returns `'non-positive`.\n\n### `cond` Statement\nThe `cond` statement, on the other hand, is used for multiple conditions and is more akin to a series of `if` statements. It evaluates a series of predicates (conditions) in order until it finds one that is true. Its general syntax is:\n\n```scheme\n(cond\n  (test1 action1)\n  (test2 action2)\n  ...\n  (else actionN))\n```\n\n- Each clause consists of a test followed by the actions to be executed if that test is true.\n- The `else` clause, if present, must be the last clause and acts as a catch-all for any cases not covered by the previous tests.\n\nFor example:\n\n```scheme\n(cond\n  ((> x 0) 'positive)\n  ((< x 0) 'negative)\n  (else 'zero))\n```\n\nIn this example, `cond` checks if `x` is greater than 0, less than 0, or neither (zero), returning the appropriate symbol based on the condition met.\n\n### Key Differences\n1. **Number of Conditions**: The `if` statement is limited to a single condition with two possible outcomes, while `cond` can handle multiple conditions in a more structured way.\n2. **Syntax and Readability**: `cond` is often more readable when dealing with multiple conditions, as it clearly separates each condition and its corresponding action.\n3. **Return Values**: Both constructs return the value of the last evaluated expression in their respective branches, but `cond` allows for more complex branching without nesting multiple `if` statements.\n\nIn summary, use `if` for simple binary conditions and `cond` for more complex decision-making scenarios involving multiple conditions.
subject: Computer Science
file_name: how-does-the-cond-statement-differ-from-the-if-statement-in-scheme.md
url: /learn/computer-science/questions/how-does-the-cond-statement-differ-from-the-if-statement-in-scheme
score: -1.0
related_article1:
    id: 16673
    title: >-
        What are some best practices for writing conditional statements in Scheme?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-some-best-practices-for-writing-conditional-statements-in-scheme
---

&nbsp;