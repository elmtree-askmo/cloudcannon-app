---
_schema: default
id: 3563
date: 2024-11-21
title: >-
    Can you provide examples and exercises in statistics involving continuous random variables?
article_title: >-
    Can you provide examples and exercises in statistics involving continuous random variables?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This content provides examples and exercises in statistics focusing on continuous random variables, including probability density functions, cumulative distribution functions, expected value, variance, and practical exercises for applied learning.
  page_keywords: >-
    continuous random variables, probability density function, cumulative distribution function, expected value, variance, statistical exercises, integration, percentiles, transformation of variables, probability calculations
author: QuickTakes
question: >-
    Can you provide examples and exercises in statistics involving continuous random variables?
answer: >-
    Here are some examples and exercises involving continuous random variables, which can help illustrate their properties and applications in statistics:\n\n### Example 1: Probability Density Function (PDF)\nConsider a continuous random variable \(X\) with the probability density function (PDF) defined as:\n$$\nf_X(x) = \n\begin{cases} \n6x(1-x) & \text{for } 0 \leq x \leq 1 \\\n0 & \text{otherwise}\n\end{cases}\n$$\nTo find the probability that \(X\) falls within the interval \([0.2, 0.5]\), we calculate:\n$$\nP(0.2 \leq X \leq 0.5) = \int_{0.2}^{0.5} f_X(x) \, dx.\n$$\n\n### Example 2: Cumulative Distribution Function (CDF)\nUsing the same PDF from Example 1, we can derive the cumulative distribution function (CDF) \(F_X(x)\):\n$$\nF_X(x) = P(X \leq x) = \int_{0}^{x} f_X(t) \, dt \quad \text{for } 0 \leq x \leq 1.\n$$\nTo find \(F_X(0.5)\), we compute:\n$$\nF_X(0.5) = \int_{0}^{0.5} 6t(1-t) \, dt.\n$$\n\n### Example 3: Expected Value and Variance\nLet \(X\) be a continuous random variable with the PDF:\n$$\nf_X(x) = \n\begin{cases} \n2x & \text{for } 0 \leq x \leq 1 \\\n0 & \text{otherwise}\n\end{cases}\n$$\nTo find the expected value \(E[X]\) and variance \(Var(X)\), we use the following formulas:\n- Expected Value:\n$$\nE[X] = \int_{-\infty}^{\infty} x f_X(x) \, dx = \int_{0}^{1} x(2x) \, dx.\n$$\n- Variance:\n$$\nVar(X) = E[X^2] - (E[X])^2,\n$$\nwhere \(E[X^2] = \int_{0}^{1} x^2(2x) \, dx\).\n\n### Exercise 1: Finding Probabilities\nGiven a continuous random variable \(Y\) with the PDF:\n$$\nf_Y(y) = \n\begin{cases} \n\frac{1}{2} & \text{for } 0 \leq y \leq 2 \\\n0 & \text{otherwise}\n\end{cases}\n$$\nCalculate the probability \(P(Y \leq 1)\).\n\n### Exercise 2: Percentiles\nFor the continuous random variable \(Z\) with the PDF:\n$$\nf_Z(z) = \n\begin{cases} \n3z^2 & \text{for } 0 \leq z \leq 1 \\\n0 & \text{otherwise}\n\end{cases}\n$$\nFind the 75th percentile, \(z_{0.75}\), such that:\n$$\n\int_{0}^{z_{0.75}} f_Z(t) \, dt = 0.75.\n$$\n\n### Exercise 3: Transformation of Variables\nLet \(W = 2X + 3\) where \(X\) is a continuous random variable uniformly distributed on \([0, 1]\). Find the variance \(Var(W)\).\n\nThese examples and exercises provide a comprehensive overview of continuous random variables, their properties, and how to work with them in statistical contexts.
subject: Mathematics
file_name: can-you-provide-examples-and-exercises-in-statistics-involving-continuous-random-variables.md
url: /learn/mathematics/questions/can-you-provide-examples-and-exercises-in-statistics-involving-continuous-random-variables
score: -1.0
related_article1:
    id: 3555
    title: >-
        What are the properties of a cumulative distribution function for continuous variables?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-properties-of-a-cumulative-distribution-function-for-continuous-variables
related_article2:
    id: 3550
    title: >-
        How are continuous random variables defined and what are some examples?
    subject: Mathematics
    url: /learn/mathematics/questions/how-are-continuous-random-variables-defined-and-what-are-some-examples
related_article3:
    id: 3547
    title: >-
        How is the expected value of a discrete random variable calculated?
    subject: Mathematics
    url: /learn/mathematics/questions/how-is-the-expected-value-of-a-discrete-random-variable-calculated
related_article4:
    id: 3565
    title: >-
        What are some common statistical problems that can be solved using random variables?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-some-common-statistical-problems-that-can-be-solved-using-random-variables
---

&nbsp;