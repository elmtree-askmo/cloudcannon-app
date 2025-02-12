---
_schema: default
id: 161141
date: 2025-01-24
title: How can the irrationality of a number be proven?
article_title: How can the irrationality of a number be proven?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content discusses a method to prove the irrationality of numbers, particularly the square root of 2, using proof by contradiction. It outlines the steps involved in the proof and explains how similar methods can be applied to other irrational numbers.
  page_keywords: >-
    irrationality, proof by contradiction, square root of 2, rational numbers, integers, coprime, even numbers, mathematical proofs, number theory
author: QuickTakes
question: >-
    How can the irrationality of a number be proven?
answer: >-
    To prove the irrationality of a number, one of the most famous methods is proof by contradiction. A classic example of this is the proof that the square root of 2 is irrational. Here’s how the proof works:\n\n1. **Assumption**: Assume that $\sqrt{2}$ is rational. This means it can be expressed as a fraction of two integers, say $\frac{a}{b}$, where $a$ and $b$ are coprime (i.e., they have no common factors other than 1), and $b \neq 0$.\n\n2. **Equation Setup**: From the assumption, we can write:\n   $$\n   \sqrt{2} = \frac{a}{b}\n   $$\n   Squaring both sides gives:\n   $$\n   2 = \frac{a^2}{b^2} \implies a^2 = 2b^2\n   $$\n\n3. **Implication**: This equation implies that $a^2$ is even (since it is equal to $2b^2$, which is clearly even). If $a^2$ is even, then $a$ must also be even (because the square of an odd number is odd).\n\n4. **Substitution**: Since $a$ is even, we can express it as $a = 2k$ for some integer $k$. Substituting this back into the equation gives:\n   $$\n   (2k)^2 = 2b^2 \implies 4k^2 = 2b^2 \implies b^2 = 2k^2\n   $$\n\n5. **Conclusion**: This shows that $b^2$ is also even, which means $b$ must be even as well. \n\n6. **Contradiction**: Since both $a$ and $b$ are even, they have a common factor of 2, which contradicts our original assumption that $a$ and $b$ are coprime.\n\nThus, we conclude that our initial assumption that $\sqrt{2}$ is rational must be false, and therefore, $\sqrt{2}$ is irrational.\n\nThis method can be generalized to prove the irrationality of other numbers, such as $\sqrt{3}$, $\sqrt{5}$, and so on, by following a similar structure of proof by contradiction.
subject: Computer Science
file_name: how-can-the-irrationality-of-a-number-be-proven.md
url: /learn/computer-science/questions/how-can-the-irrationality-of-a-number-be-proven
score: -1.0
related_article1:
    id: 160800
    title: What role does abstraction play in simplifying complex computing problems?
    subject: Computer Science
    url: /learn/computer-science/questions/what-role-does-abstraction-play-in-simplifying-complex-computing-problems
related_article2:
    id: 161091
    title: What role does abstraction play in algorithm design?
    subject: Computer Science
    url: /learn/computer-science/questions/what-role-does-abstraction-play-in-algorithm-design
related_article3:
    id: 160965
    title: What breakthroughs have been made in primality testing algorithms?
    subject: Computer Science
    url: /learn/computer-science/questions/what-breakthroughs-have-been-made-in-primality-testing-algorithms
related_article4:
    id: 160809
    title: What are the characteristics of intractable problems?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-characteristics-of-intractable-problems
related_article5:
    id: 160968
    title: How does understanding cardinality impact set theory and computability?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-understanding-cardinality-impact-set-theory-and-computability
---

&nbsp;