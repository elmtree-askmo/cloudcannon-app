---
_schema: default
id: 168335
date: 2025-02-03
title: What is the substitution rule in integration and when is it used?
article_title: What is the substitution rule in integration and when is it used?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    The substitution rule in integration simplifies the evaluation of integrals by changing the variable of integration. It is particularly useful for composite functions, making complex integrals more manageable.
  page_keywords: >-
    substitution rule, integration, composite functions, integrals, variable substitution, calculus, integrand, simplify integral, integration technique
author: QuickTakes
question: >-
    What is the substitution rule in integration and when is it used?
answer: >-
    The substitution rule in integration is a technique used to simplify the process of finding integrals by changing the variable of integration. This method is particularly useful when the integral involves a composite function, where one function is nested within another. By substituting a new variable for the inner function, the integral can often be transformed into a simpler form that is easier to evaluate.\n\n### When to Use the Substitution Rule\n\n1. **Composite Functions**: When the integrand (the function being integrated) is a composite function, such as \( f(g(x)) \cdot g'(x) \), where \( g(x) \) is a differentiable function. The substitution rule allows you to set \( u = g(x) \), which simplifies the integral.\n\n2. **Simplifying the Integral**: If the integral contains complicated expressions that can be simplified by changing variables, substitution can make the integral more manageable.\n\n3. **Identifying Patterns**: When you recognize that the derivative of a function within the integral matches part of the integrand, substitution can help isolate that function.\n\n### How to Apply the Substitution Rule\n\nTo apply the substitution rule, follow these steps:\n\n1. **Choose a Substitution**: Identify a part of the integrand to substitute. Set \( u = g(x) \) for some function \( g(x) \).\n\n2. **Differentiate**: Compute the derivative \( du = g'(x) \, dx \). This will help you express $ dx $ in terms of $ du $.\n\n3. **Rewrite the Integral**: Substitute $ u $ and $ dx $ in the integral. The integral now becomes in terms of $ u $.\n\n4. **Integrate**: Perform the integration with respect to $ u $.\n\n5. **Back Substitute**: Once you have the integral in terms of $ u $, substitute back the original variable $ x $ to express the result in terms of $ x $.\n\n### Example\n\nConsider the integral:\n\n$$\n\int 2x \cdot (x^2 + 1)^5 \, dx\n$$\n\n1. **Choose a Substitution**: Let $ u = x^2 + 1 $.\n2. **Differentiate**: Then, $ du = 2x \, dx $.\n3. **Rewrite the Integral**: The integral becomes:\n\n$$\n\int u^5 \, du\n$$\n\n4. **Integrate**: This evaluates to:\n\n$$\n\frac{u^6}{6} + C\n$$\n\n5. **Back Substitute**: Replacing $ u $ back gives:\n\n$$\n\frac{(x^2 + 1)^6}{6} + C\n$$\n\nIn summary, the substitution rule is a powerful tool in integration that simplifies the process of evaluating integrals, especially when dealing with composite functions. It is essential to recognize when to apply this technique to make integration more efficient.
subject: Mathematics
file_name: what-is-the-substitution-rule-in-integration-and-when-is-it-used.md
url: /learn/mathematics/questions/what-is-the-substitution-rule-in-integration-and-when-is-it-used
score: -1.0
---

&nbsp;