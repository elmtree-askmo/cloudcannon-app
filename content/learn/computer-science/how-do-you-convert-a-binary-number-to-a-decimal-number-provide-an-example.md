---
_schema: default
id: 165706
date: 2025-01-29
title: How do you convert a binary number to a decimal number? Provide an example.
article_title: How do you convert a binary number to a decimal number? Provide an example.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    Learn how to convert binary numbers to decimal numbers by multiplying each bit by its power of 2 and summing the results, with step-by-step examples.
  page_keywords: >-
    binary to decimal conversion, binary numbers, powers of 2, decimal equivalent, example calculation, binary number examples
author: QuickTakes
question: >-
    How do you convert a binary number to a decimal number? Provide an example.
answer: >-
    To convert a binary number to a decimal number, you multiply each bit of the binary number by its corresponding power of 2, starting from the rightmost bit (which is the least significant bit). You then sum all these values to get the decimal equivalent.\n\n### Example:\nLet's convert the binary number $ 10110000 $ to decimal.\n\n1. Write down the binary number and assign powers of 2 to each bit, starting from the right:\n   - $ 1 \times 2^7 $ (128)\n   - $ 0 \times 2^6 $ (0)\n   - $ 1 \times 2^5 $ (32)\n   - $ 1 \times 2^4 $ (16)\n   - $ 0 \times 2^3 $ (0)\n   - $ 0 \times 2^2 $ (0)\n   - $ 0 \times 2^1 $ (0)\n   - $ 0 \times 2^0 $ (0)\n\n2. Now, calculate the sum:\n   $$\n   1 \times 2^7 + 0 \times 2^6 + 1 \times 2^5 + 1 \times 2^4 + 0 \times 2^3 + 0 \times 2^2 + 0 \times 2^1 + 0 \times 2^0 = 128 + 0 + 32 + 16 + 0 + 0 + 0 + 0 = 176\n   $$\n\nThus, the binary number $ 10110000 $ equals $ 176 $ in decimal. \n\n### Additional Example:\nFor further practice, consider the binary number $ 11111111 $:\n1. Calculate:\n   $$\n   1 \times 2^7 + 1 \times 2^6 + 1 \times 2^5 + 1 \times 2^4 + 1 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255\n   $$\nThus, $ 11111111 $ in binary equals $ 255 $ in decimal. \n\nThis method can be applied to any binary number to convert it to its decimal equivalent.
subject: Computer science
file_name: how-do-you-convert-a-binary-number-to-a-decimal-number-provide-an-example.md
url: /learn/computer-science/questions/how-do-you-convert-a-binary-number-to-a-decimal-number-provide-an-example
score: -1.0
---

&nbsp;