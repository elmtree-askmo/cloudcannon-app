---
_schema: default
id: 119598
date: 2024-12-11
title: >-
    How is the expected value of a random variable calculated?
article_title: >-
    How is the expected value of a random variable calculated?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    Learn how to calculate the expected value of a random variable in probability and statistics, including formulas for discrete and continuous variables.
  page_keywords: >-
    expected value, random variable, probability, statistics, weighted average, discrete random variable, formula, continuous random variable, probability density function, long-term average
author: QuickTakes
question: >-
    How is the expected value of a random variable calculated?
answer: >-
    The expected value of a random variable is a fundamental concept in probability and statistics that quantifies the average outcome of a probabilistic event. It is calculated using a weighted average of all possible values that the random variable can take, where each value is weighted by its corresponding probability.\n\nFor a discrete random variable $X$, the expected value \(E(X)\) is computed using the following formula:\n\n$$\nE(X) = \sum_{i} x_i \cdot P(x_i)\n$$\n\nwhere:\n- $x_i$ represents each possible value of the random variable,\n- \(P(x_i)\) is the probability of $x_i$ occurring,\n- The summation is taken over all possible values of $X$.\n\nFor example, if you have a random variable that represents the outcome of a game show where you have a 0.5 chance to win $100, a 0.4 chance to win $500, and a 0.1 probability to lose $200, the expected value can be calculated as follows:\n\n$$\nE(X) = (100 \cdot 0.5) + (500 \cdot 0.4) + (-200 \cdot 0.1) = 50 + 200 - 20 = 230\n$$\n\nThus, the expected value of this random variable is $230.\n\nFor continuous random variables, the expected value is calculated using an integral:\n\n$$\nE(X) = \int_{-\infty}^{\infty} x \cdot f(x) \, dx\n$$\n\nwhere \(f(x)\) is the probability density function of the random variable.\n\nIn summary, the expected value provides a measure of the central tendency of a random variable's probability distribution, allowing for the quantification of long-term averages in probabilistic scenarios.
subject: Mathematics
file_name: how-is-the-expected-value-of-a-random-variable-calculated.md
url: /learn/mathematics/questions/how-is-the-expected-value-of-a-random-variable-calculated
score: -1.0
related_article1:
    id: 119597
    title: >-
        What is the definition of a cumulative distribution function?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-the-definition-of-a-cumulative-distribution-function
related_article2:
    id: 119620
    title: >-
        What are some practical examples of using probability mass functions in data analysis?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-some-practical-examples-of-using-probability-mass-functions-in-data-analysis
related_article3:
    id: 119618
    title: >-
        What are the steps involved in calculating the standard deviation of a dataset?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-steps-involved-in-calculating-the-standard-deviation-of-a-dataset
related_article4:
    id: 119616
    title: >-
        What are the limitations of using expected value as a measure of central tendency?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-limitations-of-using-expected-value-as-a-measure-of-central-tendency
---

&nbsp;