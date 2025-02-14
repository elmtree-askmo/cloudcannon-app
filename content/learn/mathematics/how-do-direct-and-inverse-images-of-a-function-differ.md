---
_schema: default
id: 140522
date: 2024-12-21
title: >-
    How do direct and inverse images of a function differ?
article_title: >-
    How do direct and inverse images of a function differ?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This content explains the differences between direct images and inverse images of a function in set theory and algebra, including definitions, key differences, and examples.
  page_keywords: >-
    direct image,inverse image,function,mapping,set theory,algebra,domain,codomain,image,preimage
author: QuickTakes
question: >-
    How do direct and inverse images of a function differ?
answer: >-
    The concepts of direct images and inverse images are fundamental in the study of functions in mathematics, particularly in set theory and algebra.\n\n1. **Direct Image**: For a function $ f: A \to B $ and a subset $ A' \subseteq A $, the direct image (or simply the image) of $ A' $ under $ f $ is defined as:\n   $$\n   \text{Img}(f, A') = \{ f(x) \mid x \in A' \}\n   $$\n   This set consists of all output values in $ B $ that correspond to the input values in $ A' $. Essentially, it captures the range of the function when restricted to the subset $ A' $.\n\n2. **Inverse Image**: Conversely, the inverse image (or preimage) of a subset $ B' \subseteq B $ under the function $ f $ is defined as:\n   $$\n   \text{Pre}(f, B') = \{ x \in A \mid f(x) \in B' \}\n   $$\n   This set includes all input values in $ A $ that map to elements in $ B' $. The inverse image essentially reverses the mapping of the function, identifying which inputs lead to outputs in the specified subset of the codomain.\n\n### Key Differences:\n- **Direction of Mapping**: The direct image maps from the domain $ A $ to the codomain $ B $, while the inverse image maps from the codomain $ B $ back to the domain $ A $.\n- **Set Operations**: The inverse image commutes with set operations such as unions and intersections. For example, if $ B_1 $ and $ B_2 $ are subsets of $ B $, then:\n  $$\n  \text{Pre}(f, B_1 \cup B_2) = \text{Pre}(f, B_1) \cup \text{Pre}(f, B_2)\n  $$\n  This property does not generally hold for direct images.\n\n### Example:\nConsider a function $ f: \mathbb{R} \to \mathbb{R} $ defined by \( f(x) = x^2 \). If we take the subset $ A' = [-2, 2] $, the direct image would be:\n$$\n\text{Img}(f, A') = \{ f(x) \mid x \in [-2, 2] \} = [0, 4]\n$$\nNow, if we take the subset $ B' = [1, 4] $, the inverse image would be:\n$$\n\text{Pre}(f, B') = \{ x \in \mathbb{R} \mid f(x) \in [1, 4] \} = [-2, -1] \cup [1, 2]\n$$\n\nIn summary, the direct image provides the outputs corresponding to a set of inputs, while the inverse image identifies the inputs that yield outputs in a specified set.
subject: Mathematics
file_name: how-do-direct-and-inverse-images-of-a-function-differ.md
url: /learn/mathematics/questions/how-do-direct-and-inverse-images-of-a-function-differ
score: -1.0
related_article1:
    id: 140514
    title: >-
        What operations can be performed within the power set P(E)?
    subject: Mathematics
    url: /learn/mathematics/questions/what-operations-can-be-performed-within-the-power-set-pe
related_article2:
    id: 140530
    title: >-
        What is an internal composition law in algebraic structures?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-an-internal-composition-law-in-algebraic-structures
related_article3:
    id: 140527
    title: >-
        How are order relations defined and what are their key properties?
    subject: Mathematics
    url: /learn/mathematics/questions/how-are-order-relations-defined-and-what-are-their-key-properties
related_article4:
    id: 140537
    title: >-
        What additional exercises can reinforce the understanding of algebraic structures?
    subject: Mathematics
    url: /learn/mathematics/questions/what-additional-exercises-can-reinforce-the-understanding-of-algebraic-structures
related_article5:
    id: 140511
    title: >-
        What are the key principles of reasoning in logic?
    subject: Philosophy and Greek Myths
    url: /learn/philosophy-and-greek-myths/questions/what-are-the-key-principles-of-reasoning-in-logic
---

&nbsp;