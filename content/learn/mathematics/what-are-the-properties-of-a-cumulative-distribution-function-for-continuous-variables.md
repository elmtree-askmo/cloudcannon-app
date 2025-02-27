---
_schema: default
id: 3555
date: 2024-11-21
title: >-
    What are the properties of a cumulative distribution function for continuous variables?
article_title: >-
    What are the properties of a cumulative distribution function for continuous variables?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This content discusses the key properties of the cumulative distribution function (CDF) for continuous random variables, including its non-decreasing nature, right-continuity, limits at infinity, probability calculation, and relationship with the probability density function (PDF).
  page_keywords: >-
    cumulative distribution function, CDF, continuous random variables, properties of CDF, non-decreasing function, right-continuous, limits at infinity, probability calculation, relationship with PDF, probability density function, statistical analysis, probability theory
author: QuickTakes
question: >-
    What are the properties of a cumulative distribution function for continuous variables?
answer: >-
    The cumulative distribution function (CDF) for continuous random variables has several important properties that are essential for understanding probability distributions. Here are the key properties:\n\n1. **Non-decreasing**: The CDF, denoted as \( F_X(x) \), is a non-decreasing function. This means that if \( a < b \), then \( F_X(a) \leq F_X(b) \). This property ensures that as you move along the x-axis, the probability of the random variable being less than or equal to a certain value does not decrease.\n\n2. **Right-continuous**: The CDF is right-continuous, which means that for any point \( x \), the limit from the right equals the value of the function at that point:\n   $$ \lim_{h \to 0^+} F_X(x + h) = F_X(x) $$\n\n3. **Limits at Infinity**: The CDF approaches specific limits as \( x \) approaches negative and positive infinity:\n   - \( \lim_{x \to -\infty} F_X(x) = 0 \): This indicates that the probability of the random variable taking a value less than any very small number is zero.\n   - \( \lim_{x \to +\infty} F_X(x) = 1 \): This indicates that the probability of the random variable taking a value less than any very large number is one.\n\n4. **Probability Calculation**: The probability that a continuous random variable \( X \) falls within a certain interval \([a, b]\) can be calculated using the CDF:\n   $$ P(a \leq X \leq b) = F_X(b) - F_X(a) $$\n\n5. **Relationship with Probability Density Function (PDF)**: The CDF can be derived from the probability density function (PDF) \( f_X(x) \) through integration:\n   $$ F_X(x) = \int_{-\infty}^{x} f_X(t) \, dt $$\n   This relationship shows that the CDF accumulates the probabilities from the PDF up to the point \( x \).\n\nThese properties make the CDF a fundamental tool in statistics and probability theory, allowing for the analysis and interpretation of random variables and their distributions. Understanding these properties is crucial for various statistical analyses and real-world applications.
subject: Mathematics
file_name: what-are-the-properties-of-a-cumulative-distribution-function-for-continuous-variables.md
url: /learn/mathematics/questions/what-are-the-properties-of-a-cumulative-distribution-function-for-continuous-variables
score: -1.0
related_article1:
    id: 3561
    title: >-
        What are the properties of expectation and variance for continuous random variables?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-properties-of-expectation-and-variance-for-continuous-random-variables
related_article2:
    id: 3550
    title: >-
        How are continuous random variables defined and what are some examples?
    subject: Mathematics
    url: /learn/mathematics/questions/how-are-continuous-random-variables-defined-and-what-are-some-examples
related_article3:
    id: 3543
    title: >-
        How can a probability distribution function be graphically represented?
    subject: Mathematics
    url: /learn/mathematics/questions/how-can-a-probability-distribution-function-be-graphically-represented
related_article4:
    id: 3539
    title: >-
        What is the standard notation used to represent random variables?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-the-standard-notation-used-to-represent-random-variables
---

&nbsp;