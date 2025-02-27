---
_schema: default
id: 3602
date: 2024-11-21
title: >-
    What is the definition of a binomial distribution?
article_title: >-
    What is the definition of a binomial distribution?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    The binomial distribution is a discrete probability distribution representing the number of successes in fixed independent trials with two outcomes: success or failure, commonly used in various statistical analyses.
  page_keywords: >-
    binomial distribution, probability distribution, discrete random variable, independent trials, successes, failures, binomial coefficient, PMF, probability of success, Bernoulli trials, expected value, statistics, two outcomes, trials
author: QuickTakes
question: >-
    What is the definition of a binomial distribution?
answer: >-
    The binomial distribution is a discrete probability distribution that describes the number of successes in a fixed number of independent trials, each of which has two possible outcomes: success or failure. The term "binomial" reflects the two outcomes involved in each trial. \n\n### Definition\nFormally, if \( X \) is a discrete random variable representing the number of successes in \( n \) independent Bernoulli trials (where each trial has a success probability \( p \)), then \( X \) follows a binomial distribution, denoted as \( X \sim \text{Binomial}(n, p) \). The probability mass function (PMF) of the binomial distribution is given by:\n\n$$\nP(X = k) = \binom{n}{k} p^k (1 - p)^{n - k}\n$$\n\nwhere:\n- \( \binom{n}{k} \) is the binomial coefficient, calculated as \( \frac{n!}{k!(n-k)!} \),\n- \( k \) is the number of successes (where \( k = 0, 1, 2, \ldots, n \)),\n- \( p \) is the probability of success on an individual trial,\n- \( n \) is the total number of trials.\n\n### Characteristics\n1. **Independent Trials**: Each trial is independent of the others.\n2. **Fixed Number of Trials**: The number of trials \( n \) is predetermined.\n3. **Two Outcomes**: Each trial results in one of two outcomes: success or failure.\n\n### Example\nA classic example of a binomial distribution is flipping a coin \( n \) times, where the outcomes can be heads (success) or tails (failure). If you flip a coin 10 times and want to find the probability of getting exactly 6 heads, you would use the binomial formula with \( n = 10 \), \( k = 6 \), and \( p = 0.5 \).\n\n### Expected Value\nThe expected value (mean) of a binomial distribution is calculated as:\n\n$$\nE(X) = n \times p\n$$\n\nThis provides a measure of the average number of successes expected in \( n \) trials.\n\nIn summary, the binomial distribution is a fundamental concept in statistics, widely used to model scenarios where there are two possible outcomes across multiple trials.
subject: Mathematics
file_name: what-is-the-definition-of-a-binomial-distribution.md
url: /learn/mathematics/questions/what-is-the-definition-of-a-binomial-distribution
score: -1.0
related_article1:
    id: 3608
    title: >-
        Can you provide examples and solutions for binomial distribution?
    subject: Mathematics
    url: /learn/mathematics/questions/can-you-provide-examples-and-solutions-for-binomial-distribution
related_article2:
    id: 3621
    title: >-
        What are some key examples and solutions for discrete uniform distribution?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-some-key-examples-and-solutions-for-discrete-uniform-distribution
related_article3:
    id: 3606
    title: >-
        How is the variance of a binomial distribution calculated?
    subject: Mathematics
    url: /learn/mathematics/questions/how-is-the-variance-of-a-binomial-distribution-calculated
---

&nbsp;