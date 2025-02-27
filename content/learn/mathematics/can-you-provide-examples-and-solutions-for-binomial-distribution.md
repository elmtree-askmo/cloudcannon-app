---
_schema: default
id: 3608
date: 2024-11-21
title: >-
    Can you provide examples and solutions for binomial distribution?
article_title: >-
    Can you provide examples and solutions for binomial distribution?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    Examples and solutions for calculating probabilities using the binomial distribution in different scenarios such as coin tossing and quality control.
  page_keywords: >-
    binomial distribution, probability, coin tossing, quality control, statistical methods, Bernoulli trials, probabilities calculation, mean, variance
author: QuickTakes
question: >-
    Can you provide examples and solutions for binomial distribution?
answer: >-
    The binomial distribution is a discrete probability distribution that describes the number of successes in a fixed number of independent Bernoulli trials, each with the same probability of success. Here are some examples and solutions to illustrate how to calculate probabilities using the binomial distribution.\n\n### Example 1: Coin Tossing\n**Problem:** If a fair coin is tossed 5 times, find the probability of:\n(a) Exactly 2 heads  \n(b) At least 4 heads\n\n**Solution:**\n1. **Parameters:**\n   - Number of trials, \( n = 5 \)\n   - Probability of success (getting heads), \( p = \frac{1}{2} \)\n   - Probability of failure (getting tails), \( q = 1 - p = \frac{1}{2} \)\n\n2. **(a) Probability of Exactly 2 Heads:**\n   We use the binomial probability formula:\n   $$\n   P(X = x) = \binom{n}{x} p^x q^{n-x}\n   $$\n   For \( x = 2 \):\n   $$\n   P(X = 2) = \binom{5}{2} \left(\frac{1}{2}\right)^2 \left(\frac{1}{2}\right)^{5-2} = \frac{5!}{2!3!} \left(\frac{1}{2}\right)^2 \left(\frac{1}{2}\right)^3\n   $$\n   Simplifying:\n   $$\n   P(X = 2) = 10 \cdot \frac{1}{4} \cdot \frac{1}{8} = 10 \cdot \frac{1}{32} = \frac{5}{16}\n   $$\n\n3. **(b) Probability of At Least 4 Heads:**\n   We need to calculate \( P(X \geq 4) = P(X = 4) + P(X = 5) \).\n\n   - For \( P(X = 4) \):\n   $$\n   P(X = 4) = \binom{5}{4} \left(\frac{1}{2}\right)^4 \left(\frac{1}{2}\right)^{5-4} = 5 \cdot \frac{1}{16} \cdot \frac{1}{2} = \frac{5}{32}\n   $$\n\n   - For \( P(X = 5) \):\n   $$\n   P(X = 5) = \binom{5}{5} \left(\frac{1}{2}\right)^5 \left(\frac{1}{2}\right)^{5-5} = 1 \cdot \frac{1}{32} \cdot 1 = \frac{1}{32}\n   $$\n\n   Now, summing these probabilities:\n   $$\n   P(X \geq 4) = P(X = 4) + P(X = 5) = \frac{5}{32} + \frac{1}{32} = \frac{6}{32} = \frac{3}{16}\n   $$\n\n### Example 2: Quality Control\n**Problem:** A factory produces light bulbs, and 90% of them pass the quality control test. If 10 bulbs are randomly selected, what is the probability that exactly 8 of them pass the test?\n\n**Solution:**\n1. **Parameters:**\n   - Number of trials, \( n = 10 \)\n   - Probability of success (passing), \( p = 0.9 \)\n   - Probability of failure (failing), \( q = 1 - p = 0.1 \)\n\n2. **Calculating Probability:**\n   For \( x = 8 \):\n   $$\n   P(X = 8) = \binom{10}{8} (0.9)^8 (0.1)^{10-8} = \frac{10!}{8!2!} (0.9)^8 (0.1)^2\n   $$\n   Simplifying:\n   $$\n   P(X = 8) = 45 \cdot (0.9)^8 \cdot (0.1)^2 \approx 45 \cdot 0.43046721 \cdot 0.01 \approx 0.1937102445\n   $$\n\n### Conclusion\nThe binomial distribution is a powerful tool for calculating probabilities in scenarios with two possible outcomes. The examples above demonstrate how to apply the binomial formula to find probabilities for specific numbers of successes in a series of trials. The mean and variance of a binomial distribution can also be calculated using the formulas:\n- Mean, \( \mu = np \)\n- Variance, \( \sigma^2 = npq \)\n\nThese properties help in understanding the distribution's behavior in practical applications.
subject: Mathematics
file_name: can-you-provide-examples-and-solutions-for-binomial-distribution.md
url: /learn/mathematics/questions/can-you-provide-examples-and-solutions-for-binomial-distribution
score: -1.0
related_article1:
    id: 3607
    title: >-
        How do you find probabilities in a binomial distribution?
    subject: Mathematics
    url: /learn/mathematics/questions/how-do-you-find-probabilities-in-a-binomial-distribution
---

&nbsp;