---
_schema: default
id: 93939
date: 2024-12-06
title: >-
    What is a Cumulative Distribution Function (CDF) and how does it relate to PMF?
article_title: >-
    What is a Cumulative Distribution Function (CDF) and how does it relate to PMF?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    The Cumulative Distribution Function (CDF) describes the probability that a random variable takes on a value less than or equal to a specific value, relating it to the Probability Mass Function (PMF) for a comprehensive understanding of probability distributions.
  page_keywords: >-
    Cumulative Distribution Function, CDF, Probability Mass Function, PMF, random variable, probability, statistics, discrete random variables, cumulative probability, distribution, mathematical definition
author: QuickTakes
question: >-
    What is a Cumulative Distribution Function (CDF) and how does it relate to PMF?
answer: >-
    A Cumulative Distribution Function (CDF) is a fundamental concept in probability theory and statistics that describes the probability that a random variable takes on a value less than or equal to a specific value $ x $. Mathematically, it is defined as:\n\n$$\nF(x) = P(X \leq x\n$$\n\nwhere \( F(x) \) is the CDF of the random variable $ X $. The CDF is a non-decreasing function that ranges from 0 to 1, starting at 0 as $ x $ approaches negative infinity and approaching 1 as $ x $ approaches positive infinity. This property makes the CDF a complete description of the distribution of a random variable.\n\nThe relationship between the CDF and the Probability Mass Function (PMF) is particularly important for discrete random variables. The PMF, denoted as \( P(X = x) \), gives the probability that a discrete random variable $ X $ takes on a specific value $ x $. The CDF can be derived from the PMF by summing the probabilities of all values less than or equal to $ x $:\n\n$$\nF(x) = \sum_{t \leq x} P(X = t)\n$$\n\nConversely, if you have the CDF, you can find the PMF by calculating the differences between successive values of the CDF:\n\n$$\nP(X = x) = F(x) - F(x^-)\n$$\n\nwhere \( F(x^-) \) is the value of the CDF just before $ x $. This relationship highlights how the CDF provides a cumulative view of the probabilities defined by the PMF, allowing for a comprehensive understanding of the distribution of a discrete random variable.
subject: Mathematics
file_name: what-is-a-cumulative-distribution-function-cdf-and-how-does-it-relate-to-pmf.md
url: /learn/mathematics/questions/what-is-a-cumulative-distribution-function-cdf-and-how-does-it-relate-to-pmf
score: -1.0
related_article1:
    id: 93947
    title: >-
        What is covariance and how is it calculated in probability?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-covariance-and-how-is-it-calculated-in-probability
related_article2:
    id: 93940
    title: >-
        Can you provide an overview of the Binomial Distribution and its applications?
    subject: Mathematics
    url: /learn/mathematics/questions/can-you-provide-an-overview-of-the-binomial-distribution-and-its-applications
related_article3:
    id: 93963
    title: >-
        How do different probability distributions relate to each other in statistical analysis?
    subject: Mathematics
    url: /learn/mathematics/questions/how-do-different-probability-distributions-relate-to-each-other-in-statistical-analysis
related_article4:
    id: 93949
    title: >-
        What are the techniques for approximating the Binomial Distribution using the Normal Distribution?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-techniques-for-approximating-the-binomial-distribution-using-the-normal-distribution
---

&nbsp;