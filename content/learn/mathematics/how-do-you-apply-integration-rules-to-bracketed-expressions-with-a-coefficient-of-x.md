---
_schema: default
id: 144700
date: 2025-01-01
title: >-
    How do you apply integration rules to bracketed expressions with a coefficient of x?
article_title: >-
    How do you apply integration rules to bracketed expressions with a coefficient of x?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This guide explains how to apply integration rules to expressions of the form (px + q)^n, including steps for substitution and the power rule in calculus.
  page_keywords: >-
    integration rules, bracketed expressions, coefficient of x, power rule, substitution, integration techniques, calculus, integral of power functions, example of integration, antiderivative
author: QuickTakes
question: >-
    How do you apply integration rules to bracketed expressions with a coefficient of x?
answer: >-
    To apply integration rules to bracketed expressions with a coefficient of $x$, you can follow a systematic approach. Here’s a step-by-step guide using the integration rules and techniques mentioned in the gathered information:\n\n### Step 1: Identify the Expression\nConsider an expression of the form \(f(x) = (px + q)^n\), where $p$ and $q$ are constants, and $n$ is a real number.\n\n### Step 2: Use the Power Rule\nThe power rule for integration states that for any real number $n \neq -1$:\n\n$$\n\int x^n \, dx = \frac{x^{n+1}}{n+1} + C\n$$\n\n### Step 3: Apply Substitution\nFor expressions like \(f(x) = (px + q)^n\), it is often useful to use substitution. Let:\n\n$$\nu = px + q \implies du = p \, dx \implies dx = \frac{du}{p}\n$$\n\n### Step 4: Rewrite the Integral\nSubstituting $u$ into the integral gives:\n\n$$\n\int (px + q)^n \, dx = \int u^n \cdot \frac{du}{p} = \frac{1}{p} \int u^n \, du\n$$\n\n### Step 5: Integrate Using the Power Rule\nNow, apply the power rule to integrate $u^n$:\n\n$$\n\int u^n \, du = \frac{u^{n+1}}{n+1} + C\n$$\n\nThus, we have:\n\n$$\n\int (px + q)^n \, dx = \frac{1}{p} \left( \frac{u^{n+1}}{n+1} + C \right) = \frac{(px + q)^{n+1}}{p(n+1)} + C\n$$\n\n### Step 6: Final Result\nThe final result for the integral of the bracketed expression is:\n\n$$\n\int (px + q)^n \, dx = \frac{(px + q)^{n+1}}{p(n+1)} + C\n$$\n\n### Example\nFor example, if you want to integrate \(f(x) = (3x + 2)^4\):\n\n1. Set $u = 3x + 2$, then $du = 3 \, dx$ or $dx = \frac{du}{3}$.\n2. Rewrite the integral:\n\n$$\n\int (3x + 2)^4 \, dx = \int u^4 \cdot \frac{du}{3} = \frac{1}{3} \int u^4 \, du\n$$\n\n3. Apply the power rule:\n\n$$\n\frac{1}{3} \cdot \left( \frac{u^5}{5} + C \right) = \frac{1}{15} u^5 + C = \frac{1}{15} (3x + 2)^5 + C\n$$\n\nThis method can be applied to any bracketed expression with a coefficient of $x$ by following the steps outlined above.
subject: Mathematics
file_name: how-do-you-apply-integration-rules-to-bracketed-expressions-with-a-coefficient-of-x.md
url: /learn/mathematics/questions/how-do-you-apply-integration-rules-to-bracketed-expressions-with-a-coefficient-of-x
score: -1.0
related_article1:
    id: 144697
    title: >-
        What is the integration rule for functions of the form f(x) = (x + q)^n?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-the-integration-rule-for-functions-of-the-form-fx--x--qn
related_article2:
    id: 144702
    title: >-
        How do you use the table of standard integrals to solve integration problems?
    subject: Mathematics
    url: /learn/mathematics/questions/how-do-you-use-the-table-of-standard-integrals-to-solve-integration-problems
related_article3:
    id: 144699
    title: >-
        What are the basic integration techniques used in solving integration problems?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-basic-integration-techniques-used-in-solving-integration-problems
related_article4:
    id: 144705
    title: >-
        Why are constants important in integration, and how are they determined?
    subject: Mathematics
    url: /learn/mathematics/questions/why-are-constants-important-in-integration-and-how-are-they-determined
related_article5:
    id: 144697
    title: >-
        What is the integration rule for functions of the form f(x) = (x + q)^n?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-the-integration-rule-for-functions-of-the-form-fx--x--qn
---

&nbsp;