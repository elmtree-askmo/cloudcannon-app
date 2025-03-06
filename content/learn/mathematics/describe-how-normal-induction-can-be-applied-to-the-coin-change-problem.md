---
_schema: default
id: 170693
date: 2025-02-06
title: Describe how normal induction can be applied to the Coin Change Problem.
article_title: Describe how normal induction can be applied to the Coin Change Problem.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This document explains how normal induction, or mathematical induction, is utilized to demonstrate that any integer amount above a certain threshold can be created using specified coin denominations, specifically focusing on the Coin Change Problem with 6-cent and 11-cent coins.
  page_keywords: >-
    normal induction, mathematical induction, Coin Change Problem, coin denominations, base case, inductive step, proof technique, combinatorial problems, 6-cent coins, 11-cent coins, integer amounts, thresholds
author: QuickTakes
question: >-
    Describe how normal induction can be applied to the Coin Change Problem.
answer: >-
    Normal induction, also known as mathematical induction, can be effectively applied to the Coin Change Problem to prove that any integer amount greater than or equal to a certain threshold can be formed using a specified set of coin denominations. Here’s how the process works:\n\n### Steps of Normal Induction in the Coin Change Problem\n\n1. **Define the Proposition**: Let \( P(n) \) be the proposition that an amount of $ n $ cents can be made using a given set of coin denominations. For example, if we are using 6-cent and 11-cent coins, we want to prove that \( P(n) \) holds for all $ n \geq 60 $.\n\n2. **Base Case**: Verify the base case. For $ n = 60 $, we can use $ 6 \times 10 = 60 $ cents, which shows that \( P(60) \) is true. We can also check \( P(61) \) through combinations of coins, such as $ 6 \times 5 + 11 \times 1 = 61 $, and similarly for \( P(62) \) and \( P(63) \).\n\n3. **Inductive Step**: Assume that \( P(k) \) is true for all integers $ k $ such that $ 60 \leq k \leq n $. This means we can form all amounts from 60 up to $ n $ using the coins. We need to show that \( P(n + 1) \) is also true.\n\n   - To form $ n + 1 $, we can consider two cases:\n     - If $ n + 1 $ is at least 6 cents more than a previously formed amount, we can take the amount $ n - 5 $ (which we can form by the inductive hypothesis) and add a 6-cent coin to it. Thus, \( P(n + 1) \) holds.\n     - If $ n + 1 $ is less than 6 cents more than a previously formed amount, we can check combinations that include 11-cent coins, ensuring that we can still reach $ n + 1 $ by adjusting the number of coins used.\n\n4. **Conclusion**: Since both the base case and the inductive step have been established, by the principle of mathematical induction, we conclude that \( P(n) \) is true for all integers $ n \geq 60 $. Therefore, any amount $ n $ greater than or equal to 60 can be formed using 6-cent and 11-cent coins.\n\n### Summary\nUsing normal induction, we can systematically prove that any integer amount greater than or equal to a certain threshold can be achieved with specific coin denominations. This method not only provides a rigorous proof but also illustrates the power of induction in solving combinatorial problems like the Coin Change Problem.
subject: Mathematics
file_name: describe-how-normal-induction-can-be-applied-to-the-coin-change-problem.md
url: /learn/mathematics/questions/describe-how-normal-induction-can-be-applied-to-the-coin-change-problem
---

&nbsp;