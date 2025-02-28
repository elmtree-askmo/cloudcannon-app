---
_schema: default
id: 175625
date: 2025-02-17
title: >-
    What is the difference between a Probability Mass Function (PMF) and a Probability Density Function (PDF)?
article_title: >-
    What is the difference between a Probability Mass Function (PMF) and a Probability Density Function (PDF)?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This content explains the differences between a Probability Mass Function (PMF) and a Probability Density Function (PDF), covering their definitions, properties, and how they relate to discrete and continuous random variables.
  page_keywords: >-
    Probability Mass Function, PMF, Probability Density Function, PDF, discrete random variables, continuous random variables, random variable probabilities, mathematical representation, probability calculation, integration, summation
author: QuickTakes
question: >-
    What is the difference between a Probability Mass Function (PMF) and a Probability Density Function (PDF)?
answer: >-
    The difference between a Probability Mass Function (PMF) and a Probability Density Function (PDF) lies primarily in the type of random variable they are associated with and how they represent probabilities.\n\n### Probability Mass Function (PMF)\n- **Definition**: A PMF is used for discrete random variables. It gives the probability that a discrete random variable is exactly equal to some value. \n- **Mathematical Representation**: For a discrete random variable $X$, the PMF is defined as:\n  $$\n  f_X(x) = P(X = x)\n  $$\n  where $x$ is a value in the support of $X$.\n- **Properties**:\n  1. \(f_X(x) \geq 0\) for all $x$.\n  2. The sum of the probabilities for all possible values of $X$ equals 1:\n  $$\n  \sum_{x \in S_X} f_X(x) = 1\n  $$\n  where $S_X$ is the set of all possible values of $X$.\n\n### Probability Density Function (PDF)\n- **Definition**: A PDF is used for continuous random variables. It describes the likelihood of the random variable taking on a particular value, but it does not give probabilities directly for specific values.\n- **Mathematical Representation**: For a continuous random variable $X$, the PDF is defined such that:\n  $$\n  f_X(x) \geq 0\n  $$\n  and the total area under the curve of the PDF over its range is equal to 1:\n  $$\n  \int_{-\infty}^{\infty} f_X(x) \, dx = 1\n  $$\n- **Probability Calculation**: The probability that $X$ falls within a certain interval $[a, b]$ is given by the integral of the PDF over that interval:\n  $$\n  P(a < X < b) = \int_{a}^{b} f_X(x) \, dx\n  $$\n\n### Key Differences\n1. **Type of Random Variable**:\n   - PMF is for discrete random variables.\n   - PDF is for continuous random variables.\n\n2. **Probability Representation**:\n   - PMF gives the probability of specific outcomes.\n   - PDF gives a density, and probabilities are obtained by integrating over intervals.\n\n3. **Summation vs. Integration**:\n   - PMF involves summation of probabilities.\n   - PDF involves integration to find probabilities over intervals.\n\nIn summary, while both PMF and PDF serve to describe the distribution of random variables, they apply to different types of variables and use different methods to express probabilities.
subject: Mathematics
file_name: what-is-the-difference-between-a-probability-mass-function-pmf-and-a-probability-density-function-pdf.md
url: /learn/mathematics/questions/what-is-the-difference-between-a-probability-mass-function-pmf-and-a-probability-density-function-pdf
score: -1.0
related_article1:
    id: 175639
    title: >-
        Describe the AR(1) model and its significance in time series analysis.
    subject: Mathematics
    url: /learn/mathematics/questions/describe-the-ar1-model-and-its-significance-in-time-series-analysis
related_article2:
    id: 175645
    title: >-
        What is the purpose of Ramsey’s RESET Test, and how is it interpreted?
    subject: Economics
    url: /learn/economics/questions/what-is-the-purpose-of-ramseys-reset-test-and-how-is-it-interpreted
related_article3:
    id: 175623
    title: >-
        Explain the relationship between conditional probability and the independence of events.
    subject: Mathematics
    url: /learn/mathematics/questions/explain-the-relationship-between-conditional-probability-and-the-independence-of-events
---

&nbsp;