---
_schema: default
id: 170787
date: 2025-02-06
title: Explain the Euclidean algorithm for finding the greatest common divisor.
article_title: Explain the Euclidean algorithm for finding the greatest common divisor.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    The Euclidean algorithm is a method for finding the greatest common divisor (GCD) of two integers through a series of division steps, making it efficient for large integer computations.
  page_keywords: >-
    Euclidean algorithm,GCD,greatest common divisor,integers,remainder,modulus,number theory,cryptography,polynomial time
author: QuickTakes
question: >-
    Explain the Euclidean algorithm for finding the greatest common divisor.
answer: >-
    The Euclidean algorithm is a well-known method for finding the greatest common divisor (GCD) of two integers. The GCD of two integers is the largest positive integer that divides both numbers without leaving a remainder. The algorithm is based on the principle that the GCD of two numbers also divides their difference.\n\n### Steps of the Euclidean Algorithm\n\n1. **Start with two integers**: Let $ a $ and $ b $ be the two integers for which you want to find the GCD. Assume $ a > b $.\n\n2. **Apply the division**: Compute the remainder of $ a $ divided by $ b $:\n   $$\n   r = a \mod b\n   $$\n\n3. **Replace and repeat**: Replace $ a $ with $ b $ and $ b $ with $ r $:\n   - Set $ a = b $\n   - Set $ b = r $\n\n4. **Continue until remainder is zero**: Repeat steps 2 and 3 until $ b $ becomes zero. The last non-zero remainder is the GCD of the original two integers.\n\n### Example\n\nTo find the GCD of 48 and 18:\n\n1. Compute $ 48 \mod 18 $:\n   - $ 48 \div 18 = 2 $ (quotient)\n   - $ 48 - 2 \times 18 = 12 $ (remainder)\n   - So, $ r = 12 $\n\n2. Replace $ a $ and $ b $:\n   - Now, $ a = 18 $ and $ b = 12 $\n\n3. Compute $ 18 \mod 12 $:\n   - $ 18 \div 12 = 1 $\n   - $ 18 - 1 \times 12 = 6 $\n   - So, $ r = 6 $\n\n4. Replace $ a $ and $ b $:\n   - Now, $ a = 12 $ and $ b = 6 $\n\n5. Compute $ 12 \mod 6 $:\n   - $ 12 \div 6 = 2 $\n   - $ 12 - 2 \times 6 = 0 $\n   - So, $ r = 0 $\n\nSince $ b $ is now zero, the last non-zero remainder is 6. Therefore, the GCD of 48 and 18 is 6.\n\n### Conclusion\n\nThe Euclidean algorithm is efficient and runs in polynomial time, specifically \( O(\log(\min(a, b))) \), making it suitable for computing the GCD of large integers. It is a fundamental algorithm in number theory and has applications in various fields, including cryptography and computer science.
subject: Computer science
file_name: explain-the-euclidean-algorithm-for-finding-the-greatest-common-divisor.md
url: /learn/computer-science/questions/explain-the-euclidean-algorithm-for-finding-the-greatest-common-divisor
---

&nbsp;