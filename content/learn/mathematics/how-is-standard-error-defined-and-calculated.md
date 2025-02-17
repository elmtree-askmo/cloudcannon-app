---
_schema: default
id: 122846
date: 2024-12-13
title: >-
    How is standard error defined and calculated?
article_title: >-
    How is standard error defined and calculated?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This content explains the definition and calculation of standard error (SE) in statistics, detailing its significance in representing the accuracy of a sample distribution compared to a population.
  page_keywords: >-
    standard error, SE, statistics, sample distribution, population, standard deviation, calculation, formula, sample size, sample mean, deviations, squared deviations, reliability, estimate, variability
author: QuickTakes
question: >-
    How is standard error defined and calculated?
answer: >-
    The standard error (SE) is a statistical term that quantifies the accuracy with which a sample distribution represents a population. It is specifically defined as the standard deviation of the sampling distribution of a statistic, most commonly the sample mean. The standard error provides insight into how much the sample mean is expected to vary from the true population mean.\n\n### Calculation of Standard Error\n\nThe standard error is calculated using the following formula:\n\n$$\nSE = \frac{s}{\sqrt{n}}\n$$\n\nWhere:\n- $ s $ is the standard deviation of the sample.\n- $ n $ is the sample size.\n\n### Steps to Calculate Standard Error\n\n1. **Find the Sample Size (n)**: Count the number of observations in your sample.\n2. **Calculate the Sample Mean ($ \mu $)**: Sum all the sample values and divide by the number of observations.\n3. **Calculate the Deviations**: For each sample value, find the deviation from the mean ($ x_i - \mu $).\n4. **Square the Deviations**: Square each of the deviations calculated in the previous step.\n5. **Sum the Squared Deviations**: Add all the squared deviations together.\n6. **Calculate the Sample Standard Deviation (s)**: Divide the sum of squared deviations by $ n-1 $ (for sample standard deviation) and take the square root.\n7. **Calculate the Standard Error**: Finally, divide the sample standard deviation by the square root of the sample size using the formula provided above.\n\n### Example\n\nSuppose we have a sample of 5 exam scores: 70, 85, 90, 75, and 80.\n\n1. **Sample Size (n)**: 5\n2. **Sample Mean ($ \mu $)**: $ \frac{70 + 85 + 90 + 75 + 80}{5} = 80 $\n3. **Deviations**: \n   - $ 70 - 80 = -10 $\n   - $ 85 - 80 = 5 $\n   - $ 90 - 80 = 10 $\n   - $ 75 - 80 = -5 $\n   - $ 80 - 80 = 0 $\n4. **Squared Deviations**: \n   - \( (-10)^2 = 100 \)\n   - $ 5^2 = 25 $\n   - $ 10^2 = 100 $\n   - \( (-5)^2 = 25 \)\n   - $ 0^2 = 0 $\n5. **Sum of Squared Deviations**: $ 100 + 25 + 100 + 25 + 0 = 250 $\n6. **Sample Standard Deviation (s)**: \n   - $ s = \sqrt{\frac{250}{5-1}} = \sqrt{62.5} \approx 7.91 $\n7. **Standard Error (SE)**: \n   - $ SE = \frac{7.91}{\sqrt{5}} \approx \frac{7.91}{2.24} \approx 3.53 $\n\nIn summary, the standard error is a crucial measure in statistics that helps to understand the reliability of the sample mean as an estimate of the population mean. It is distinct from the standard deviation, which measures the variability within the dataset itself.
subject: Mathematics
file_name: how-is-standard-error-defined-and-calculated.md
url: /learn/mathematics/questions/how-is-standard-error-defined-and-calculated
score: -1.0
related_article1:
    id: 122848
    title: >-
        Can you explain the Central Limit Theorem in simple terms?
    subject: Mathematics
    url: /learn/mathematics/questions/can-you-explain-the-central-limit-theorem-in-simple-terms
related_article2:
    id: 122861
    title: >-
        What factors influence the width of a confidence interval?
    subject: Mathematics
    url: /learn/mathematics/questions/what-factors-influence-the-width-of-a-confidence-interval
related_article3:
    id: 122854
    title: >-
        How does population size affect statistical inference?
    subject: Mathematics
    url: /learn/mathematics/questions/how-does-population-size-affect-statistical-inference
---

&nbsp;