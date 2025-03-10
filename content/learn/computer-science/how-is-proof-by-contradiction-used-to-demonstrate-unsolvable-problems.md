---
_schema: default
id: 160805
date: 2025-01-24
title: How is proof by contradiction used to demonstrate unsolvable problems?
article_title: How is proof by contradiction used to demonstrate unsolvable problems?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content explains how proof by contradiction is used to demonstrate unsolvable problems, particularly focusing on the halting problem as an example of undecidability in computability theory.
  page_keywords: >-
    proof by contradiction, unsolvable problems, halting problem, undecidable problems, Turing machine, logical reasoning, self-reference, contradiction, algorithmic solutions, computation theory
author: QuickTakes
question: >-
    How is proof by contradiction used to demonstrate unsolvable problems?
answer: >-
    Proof by contradiction is a powerful technique used in mathematics and logic to demonstrate the truth of a statement by showing that assuming the opposite leads to a contradiction. This method is particularly useful in proving the unsolvability of certain problems, such as the halting problem and other undecidable problems.\n\n### How Proof by Contradiction Works\n\nThe process of proof by contradiction involves two main steps:\n\n1. **Assume the Negation**: Start by assuming that the statement you want to prove is false. This assumption is often denoted as ¬P, where P is the statement in question.\n\n2. **Derive a Contradiction**: From this assumption, use logical reasoning to derive a conclusion that contradicts a known fact, a theorem, or leads to an absurdity. If you reach a contradiction, it implies that the original assumption (¬P) must be false, and therefore, the statement P must be true.\n\n### Application to Unsolvable Problems\n\nOne of the most famous examples of using proof by contradiction to demonstrate an unsolvable problem is the halting problem. The halting problem asks whether there exists a Turing machine that can determine, for any arbitrary program and input, whether the program will eventually halt (terminate) or run indefinitely.\n\n#### Proof of the Halting Problem's Undecidability\n\n1. **Assumption**: Suppose there exists a Turing machine $ T $ that can decide the halting problem. This means $ T $ can take any program $ P $ and input $ I $ and correctly determine whether $ P $ halts on $ I $.\n\n2. **Construct a Contradictory Machine**: We can construct a new Turing machine $ H $ that behaves as follows:\n   - If \( T(P, I) \) indicates that $ P $ halts on $ I $, then $ H $ enters an infinite loop.\n   - If \( T(P, I) \) indicates that $ P $ does not halt on $ I $, then $ H $ halts.\n\n3. **Self-Reference**: Now, consider what happens when we run $ H $ with itself as input, i.e., \( H(H) \):\n   - If \( T(H, H) \) indicates that $ H $ halts, then by the definition of $ H $, it must loop indefinitely.\n   - Conversely, if \( T(H, H) \) indicates that $ H $ does not halt, then $ H $ must halt.\n\n4. **Contradiction**: In both cases, we reach a contradiction. Therefore, our initial assumption that such a Turing machine $ T $ exists must be false. This proves that the halting problem is undecidable.\n\n### Conclusion\n\nProof by contradiction is a fundamental technique in demonstrating the unsolvability of problems in computability theory. By assuming the opposite of what we want to prove and deriving a contradiction, we can establish the truth of statements regarding undecidable problems, such as the halting problem. This method not only highlights the limitations of algorithmic solutions but also deepens our understanding of the boundaries of computation.
subject: Computer science
file_name: how-is-proof-by-contradiction-used-to-demonstrate-unsolvable-problems.md
url: /learn/computer-science/questions/how-is-proof-by-contradiction-used-to-demonstrate-unsolvable-problems
---

&nbsp;