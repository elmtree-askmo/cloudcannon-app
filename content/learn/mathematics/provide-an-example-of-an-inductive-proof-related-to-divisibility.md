---
_schema: default
id: 170764
date: 2025-02-06
title: Provide an example of an inductive proof related to divisibility.
article_title: Provide an example of an inductive proof related to divisibility.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    An example of an inductive proof showing that for all natural numbers n, the expression n^3 - n is divisible by 3.
  page_keywords: >-
    inductive proof, divisibility, natural numbers, mathematical induction, base case, inductive step, expression, k, n^3 - n, divisible by 3
author: QuickTakes
question: >-
    Provide an example of an inductive proof related to divisibility.
answer: >-
    To illustrate an example of an inductive proof related to divisibility, we can prove that for all natural numbers $ n $, the expression $ n^3 - n $ is divisible by 3.\n\n### Statement to Prove\nWe want to prove that $ n^3 - n $ is divisible by 3 for all natural numbers $ n $.\n\n### Proof by Induction\n\n1. **Base Case**: \n   We start with $ n = 1 $:\n   $$\n   1^3 - 1 = 1 - 1 = 0\n   $$\n   Since 0 is divisible by 3, the base case holds.\n\n2. **Inductive Step**: \n   Assume that the statement is true for some arbitrary natural number $ k $; that is, we assume:\n   $$\n   k^3 - k \text{ is divisible by 3.}\n   $$\n   This means there exists an integer $ m $ such that:\n   $$\n   k^3 - k = 3m.\n   $$\n\n   Now we need to show that the statement holds for $ k + 1 $:\n   $$\n   (k + 1)^3 - (k + 1).\n   $$\n   Expanding this expression:\n   $$\n   (k + 1)^3 - (k + 1) = (k^3 + 3k^2 + 3k + 1) - (k + 1) = k^3 + 3k^2 + 3k + 1 - k - 1.\n   $$\n   Simplifying this gives:\n   $$\n   k^3 + 3k^2 + 2k.\n   $$\n   We can rearrange this as:\n   $$\n   (k^3 - k) + 3k^2 + k.\n   $$\n   By our inductive hypothesis, we know $ k^3 - k = 3m $ for some integer $ m $. Thus, we can substitute:\n   $$\n   (3m) + 3k^2 + k = 3m + 3k^2 + k.\n   $$\n   Now, we need to show that $ 3m + 3k^2 + k $ is divisible by 3. The first two terms, $ 3m $ and $ 3k^2 $, are clearly divisible by 3. The term $ k $ can be analyzed based on its value modulo 3:\n\n   - If $ k \equiv 0 \mod 3 $, then $ k $ is divisible by 3.\n   - If $ k \equiv 1 \mod 3 $, then $ k \equiv 1 $ and $ k + 3m + 3k^2 \equiv 1 \mod 3 $.\n   - If $ k \equiv 2 \mod 3 $, then $ k \equiv 2 $ and $ k + 3m + 3k^2 \equiv 2 \mod 3 $.\n\n   In all cases, \( (k + 1)^3 - (k + 1) \) is divisible by 3.\n\n3. **Conclusion**: \n   Since both the base case and the inductive step have been proven, by the principle of mathematical induction, we conclude that $ n^3 - n $ is divisible by 3 for all natural numbers $ n $. \n\nThis example demonstrates how to use the inductive principle to prove a statement about divisibility in mathematics.
subject: Mathematics
file_name: provide-an-example-of-an-inductive-proof-related-to-divisibility.md
url: /learn/mathematics/questions/provide-an-example-of-an-inductive-proof-related-to-divisibility
---

&nbsp;