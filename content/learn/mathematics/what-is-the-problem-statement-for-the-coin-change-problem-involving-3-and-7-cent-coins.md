---
_schema: default
id: 170699
date: 2025-02-06
title: What is the problem statement for the Coin Change Problem involving 3 and 7 cent coins?
article_title: What is the problem statement for the Coin Change Problem involving 3 and 7 cent coins?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    The Coin Change Problem using 3-cent and 7-cent coins is about proving that exact change can be made for any amount 12 cents or greater using these coins. The proof involves establishing base cases and using mathematical induction.
  page_keywords: >-
    Coin Change Problem, 3-cent coins, 7-cent coins, problem statement, mathematical induction, base cases, inductive step, change for 12 cents, change for 13 cents, change for 14 cents, exact change, combinatorial proof
author: QuickTakes
question: >-
    What is the problem statement for the Coin Change Problem involving 3 and 7 cent coins?
answer: >-
    The Coin Change Problem involving 3-cent and 7-cent coins can be stated as follows:\n\n**Problem Statement**: Prove that it is possible to make exact change for any amount greater than or equal to 12 cents using only 3-cent and 7-cent coins.\n\nTo establish this, we can use mathematical induction. The proof consists of two main components: base cases and the inductive step.\n\n### Base Cases\nWe need to verify that we can make change for the amounts starting from 12 cents up to 14 cents:\n\n- **For 12 cents**: \n  - \( P(12) = 4 \times 3 + 0 \times 7 \) (using four 3-cent coins)\n  \n- **For 13 cents**: \n  - \( P(13) = 2 \times 3 + 1 \times 7 \) (using two 3-cent coins and one 7-cent coin)\n  \n- **For 14 cents**: \n  - \( P(14) = 0 \times 3 + 2 \times 7 \) (using two 7-cent coins)\n\n### Inductive Step\nAssume that it is possible to make change for some amount $ k $ (where $ k \geq 14 $) using 3-cent and 7-cent coins. We need to show that it is also possible to make change for $ k + 1 $.\n\nTo do this, we can consider the following cases:\n- If we have at least one 3-cent coin in the combination for $ k $, we can replace one 3-cent coin with another 3-cent coin to make $ k + 1 $.\n- If we do not have a 3-cent coin in the combination for $ k $, we can use one less 7-cent coin (if we have at least one) and add three 3-cent coins to make $ k + 1 $.\n\nBy establishing the base cases and proving the inductive step, we can conclude that it is indeed possible to make exact change for any amount greater than or equal to 12 cents using only 3-cent and 7-cent coins.
subject: Mathematics
file_name: what-is-the-problem-statement-for-the-coin-change-problem-involving-3-and-7-cent-coins.md
url: /learn/mathematics/questions/what-is-the-problem-statement-for-the-coin-change-problem-involving-3-and-7-cent-coins
score: -1.0
---

&nbsp;