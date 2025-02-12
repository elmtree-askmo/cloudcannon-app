---
_schema: default
id: 170787
date: 2025-02-06
title: >-
    Explain the Euclidean algorithm for finding the greatest common divisor.
article_title: >-
    Explain the Euclidean algorithm for finding the greatest common divisor.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    The Euclidean algorithm is a method to find the greatest common divisor of two integers efficiently by using their remainders through a series of divisions.
  page_keywords: >-
    Euclidean algorithm,greatest common divisor,GCD,number theory,integers,remainder,division,polynomial time
author: QuickTakes
question: >-
    Explain the Euclidean algorithm for finding the greatest common divisor.
answer: >-
    The Euclidean algorithm is a well-known method for finding the greatest common divisor (GCD) of two integers. The GCD of two integers is the largest positive integer that divides both numbers without leaving a remainder. The algorithm is based on the principle that the GCD of two numbers also divides their difference.\n\n### Steps of the Euclidean Algorithm\n\n1. **Start with two integers**: Let $ a $ and $ b $ be the two integers for which you want to find the GCD. Assume $ a > b $.\n\n2. **Apply the division**: Compute the remainder of $ a $ divided by $ b $:\n   $$\n   r = a \mod b\n   $$\n\n3. **Replace and repeat**: Replace $ a $ with $ b $ and $ b $ with $ r $:\n   - Set $ a = b $\n   - Set $ b = r $\n\n4. **Continue until remainder is zero**: Repeat steps 2 and 3 until $ b $ becomes zero. The last non-zero remainder is the GCD of the original two integers.\n\n### Example\n\nTo find the GCD of 48 and 18:\n\n1. Compute $ 48 \mod 18 $:\n   - $ 48 \div 18 = 2 $ (quotient)\n   - $ 48 - 2 \times 18 = 12 $ (remainder)\n   - So, $ r = 12 $\n\n2. Replace $ a $ and $ b $:\n   - Now, $ a = 18 $ and $ b = 12 $\n\n3. Compute $ 18 \mod 12 $:\n   - $ 18 \div 12 = 1 $\n   - $ 18 - 1 \times 12 = 6 $\n   - So, $ r = 6 $\n\n4. Replace $ a $ and $ b $:\n   - Now, $ a = 12 $ and $ b = 6 $\n\n5. Compute $ 12 \mod 6 $:\n   - $ 12 \div 6 = 2 $\n   - $ 12 - 2 \times 6 = 0 $\n   - So, $ r = 0 $\n\nSince $ b $ is now zero, the last non-zero remainder is 6. Therefore, the GCD of 48 and 18 is 6.\n\n### Conclusion\n\nThe Euclidean algorithm is efficient and runs in polynomial time, specifically \( O(\log(\min(a, b))) \), making it suitable for computing the GCD of large integers. It is a fundamental algorithm in number theory and has applications in various fields, including cryptography and computer science.
subject: Computer Science
file_name: explain-the-euclidean-algorithm-for-finding-the-greatest-common-divisor.md
url: /learn/computer-science/questions/explain-the-euclidean-algorithm-for-finding-the-greatest-common-divisor
score: -1.0
related_article1:
    id: 170778
    title: >-
        Define the P vs NP problem and explain its importance in computational theory.
    subject: Computer Science
    url: /learn/computer-science/questions/define-the-p-vs-np-problem-and-explain-its-importance-in-computational-theory
related_article2:
    id: 170784
    title: >-
        What factors contribute to the efficiency of an algorithm?
    subject: Computer Science
    url: /learn/computer-science/questions/what-factors-contribute-to-the-efficiency-of-an-algorithm
related_article3:
    id: 170779
    title: >-
        What is an NP-complete problem and why is the satisfiability problem significant in this context?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-an-npcomplete-problem-and-why-is-the-satisfiability-problem-significant-in-this-context
related_article4:
    id: 170778
    title: >-
        Define the P vs NP problem and explain its importance in computational theory.
    subject: Computer Science
    url: /learn/computer-science/questions/define-the-p-vs-np-problem-and-explain-its-importance-in-computational-theory
related_article5:
    id: 170781
    title: >-
        Differentiate between deterministic and non-deterministic approaches in computational theory.
    subject: Computer Science
    url: /learn/computer-science/questions/differentiate-between-deterministic-and-nondeterministic-approaches-in-computational-theory
---

&nbsp;