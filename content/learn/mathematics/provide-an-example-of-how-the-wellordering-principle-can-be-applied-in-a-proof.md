---
_schema: default
id: 170758
date: 2025-02-06
title: Provide an example of how the well-ordering principle can be applied in a proof.
article_title: Provide an example of how the well-ordering principle can be applied in a proof.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    An example of using the well-ordering principle in a proof to demonstrate that every integer greater than or equal to n can be expressed as a sum of 1s and 2s using mathematical induction.
  page_keywords: >-
    well-ordering principle, proof, mathematical induction, sum of 1s and 2s, base case, inductive step, contradiction, smallest integer, natural numbers, integer expression
author: QuickTakes
question: >-
    Provide an example of how the well-ordering principle can be applied in a proof.
answer: >-
    The well-ordering principle is a fundamental concept in mathematics that states every non-empty set of natural numbers has a least element. This principle can be effectively applied in proofs, particularly in the context of mathematical induction.\n\n### Example of Applying the Well-Ordering Principle in a Proof\n\nLet's consider a classic example: proving that for any integer $ n \geq 1 $, the statement \( P(n) \) that "every integer greater than or equal to $ n $ can be expressed as a sum of 1s and 2s" holds true.\n\n#### Proof by Induction Using the Well-Ordering Principle\n\n1. **Base Case**: \n   We first check the base case $ n = 1 $. The integer 1 can be expressed as $ 1 $ (one 1). Thus, \( P(1) \) is true.\n\n2. **Inductive Step**: \n   Assume that \( P(k) \) is true for all integers $ k $ such that $ 1 \leq k \leq n $. This means that every integer from 1 to $ n $ can be expressed as a sum of 1s and 2s.\n\n   We need to show that \( P(n+1) \) is also true. \n\n   - If $ n+1 $ is expressed as $ n-1 + 2 $, then since $ n-1 $ is less than or equal to $ n $, by the inductive hypothesis, $ n-1 $ can be expressed as a sum of 1s and 2s. Therefore, $ n+1 $ can also be expressed as a sum of 1s and 2s.\n   - If $ n+1 $ is expressed as $ n + 1 $, then it can be expressed as one more 1 added to the sum that represents $ n $.\n\n   Thus, in both cases, \( P(n+1) \) holds true.\n\n3. **Conclusion**: \n   By the principle of mathematical induction, since the base case holds and the inductive step has been proven, we conclude that \( P(n) \) is true for all integers $ n \geq 1 $.\n\n#### Justification Using the Well-Ordering Principle\n\nNow, to justify the validity of our inductive proof, we can invoke the well-ordering principle. Suppose, for the sake of contradiction, that there exists a smallest integer $ m $ such that \( P(m) \) is false. According to our inductive hypothesis, \( P(k) \) is true for all integers $ k < m $. \n\nSince $ m $ is the smallest integer for which \( P(m) \) is false, it must be that $ m-1 $ can be expressed as a sum of 1s and 2s (by the inductive hypothesis). Therefore, $ m $ can be expressed as \( (m-1) + 1 \), contradicting the assumption that \( P(m) \) is false. \n\nThis contradiction implies that no such smallest integer $ m $ can exist, thus reinforcing the validity of our inductive proof.\n\nIn summary, the well-ordering principle not only supports the structure of our proof by induction but also provides a powerful justification for the correctness of the inductive process.
subject: Mathematics
file_name: provide-an-example-of-how-the-wellordering-principle-can-be-applied-in-a-proof.md
url: /learn/mathematics/questions/provide-an-example-of-how-the-wellordering-principle-can-be-applied-in-a-proof
---

&nbsp;