---
_schema: default
id: 170764
date: 2025-02-06
title: >-
    Provide an example of an inductive proof related to divisibility.
article_title: >-
    Provide an example of an inductive proof related to divisibility.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This content provides an example of an inductive proof demonstrating that for all natural numbers n, the expression n^3 - n is divisible by 3, outlining the base case, inductive hypothesis, and conclusion.
  page_keywords: >-
    inductive proof, divisibility, n cubed minus n, mathematical induction, base case, inductive step, natural numbers, modulo 3, integer m, algebraic expansion
author: QuickTakes
question: >-
    Provide an example of an inductive proof related to divisibility.
answer: >-
    To illustrate an example of an inductive proof related to divisibility, we can prove that for all natural numbers $ n $, the expression $ n^3 - n $ is divisible by 3.\n\n### Statement to Prove\nWe want to prove that $ n^3 - n $ is divisible by 3 for all natural numbers $ n $.\n\n### Proof by Induction\n\n1. **Base Case**: \n   We start with $ n = 1 $:\n   $$\n   1^3 - 1 = 1 - 1 = 0\n   $$\n   Since 0 is divisible by 3, the base case holds.\n\n2. **Inductive Step**: \n   Assume that the statement is true for some arbitrary natural number $ k $; that is, we assume:\n   $$\n   k^3 - k \text{ is divisible by 3.}\n   $$\n   This means there exists an integer $ m $ such that:\n   $$\n   k^3 - k = 3m.\n   $$\n\n   Now we need to show that the statement holds for $ k + 1 $:\n   $$\n   (k + 1)^3 - (k + 1).\n   $$\n   Expanding this expression:\n   $$\n   (k + 1)^3 - (k + 1) = (k^3 + 3k^2 + 3k + 1) - (k + 1) = k^3 + 3k^2 + 3k + 1 - k - 1.\n   $$\n   Simplifying this gives:\n   $$\n   k^3 + 3k^2 + 2k.\n   $$\n   We can rearrange this as:\n   $$\n   (k^3 - k) + 3k^2 + k.\n   $$\n   By our inductive hypothesis, we know $ k^3 - k = 3m $ for some integer $ m $. Thus, we can substitute:\n   $$\n   (3m) + 3k^2 + k = 3m + 3k^2 + k.\n   $$\n   Now, we need to show that $ 3m + 3k^2 + k $ is divisible by 3. The first two terms, $ 3m $ and $ 3k^2 $, are clearly divisible by 3. The term $ k $ can be analyzed based on its value modulo 3:\n\n   - If $ k \equiv 0 \mod 3 $, then $ k $ is divisible by 3.\n   - If $ k \equiv 1 \mod 3 $, then $ k \equiv 1 $ and $ k + 3m + 3k^2 \equiv 1 \mod 3 $.\n   - If $ k \equiv 2 \mod 3 $, then $ k \equiv 2 $ and $ k + 3m + 3k^2 \equiv 2 \mod 3 $.\n\n   In all cases, \( (k + 1)^3 - (k + 1) \) is divisible by 3.\n\n3. **Conclusion**: \n   Since both the base case and the inductive step have been proven, by the principle of mathematical induction, we conclude that $ n^3 - n $ is divisible by 3 for all natural numbers $ n $. \n\nThis example demonstrates how to use the inductive principle to prove a statement about divisibility in mathematics.
subject: Mathematics
file_name: provide-an-example-of-an-inductive-proof-related-to-divisibility.md
url: /learn/mathematics/questions/provide-an-example-of-an-inductive-proof-related-to-divisibility
score: -1.0
related_article1:
    id: 170765
    title: >-
        What is a common mistake made during the inductive step of a proof?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-a-common-mistake-made-during-the-inductive-step-of-a-proof
related_article2:
    id: 170772
    title: >-
        What are the properties of natural numbers that make them suitable for induction?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-properties-of-natural-numbers-that-make-them-suitable-for-induction
related_article3:
    id: 170761
    title: >-
        What is a direct proof, and how does it differ from a proof by contradiction?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-a-direct-proof-and-how-does-it-differ-from-a-proof-by-contradiction
related_article4:
    id: 170759
    title: >-
        What distinguishes strong induction from simple induction?
    subject: Mathematics
    url: /learn/mathematics/questions/what-distinguishes-strong-induction-from-simple-induction
related_article5:
    id: 170766
    title: >-
        Give an example of a correct application of the inductive step.
    subject: Mathematics
    url: /learn/mathematics/questions/give-an-example-of-a-correct-application-of-the-inductive-step
---

&nbsp;