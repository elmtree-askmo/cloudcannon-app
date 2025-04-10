---
_schema: default
id: 161022
date: 2025-01-24
title: What is the difference between solvable and unsolvable problems in computability theory?
article_title: What is the difference between solvable and unsolvable problems in computability theory?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This article explains the fundamental distinction between solvable and unsolvable problems in computability theory, highlighting the existence of algorithms and the halting behavior of Turing machines.
  page_keywords: >-
    computability theory, solvable problems, unsolvable problems, decidable, undecidable, Turing machine, Halting Problem, primality problem, algorithm, finite time, infinite time, enumerable, non-enumerable, complexity, decision problems, limitations of computation
author: QuickTakes
question: >-
    What is the difference between solvable and unsolvable problems in computability theory?
answer: >-
    In computability theory, the distinction between solvable and unsolvable problems is fundamental to understanding the limits of computation.\n\n### Solvable Problems\nA problem is considered **solvable** (or decidable) if there exists an algorithm that can provide a correct answer (yes or no) for every possible input in a finite amount of time. In other words, there is a Turing machine that will halt and produce an output for every input instance of the problem. For example, the primality problem, which asks whether a given natural number is prime, is solvable because there are algorithms that can determine the primality of any number in a finite amount of time.\n\n### Unsolvable Problems\nOn the other hand, a problem is termed **unsolvable** (or undecidable) if no such algorithm exists. This means that there is no Turing machine that can solve the problem for all possible inputs. A classic example of an unsolvable problem is the **Halting Problem**. The Halting Problem asks whether a given Turing machine will halt (finish executing) when provided with a specific input. Alan Turing proved that there is no general algorithm that can solve this problem for all possible Turing machines and inputs, making it undecidable.\n\n### Key Differences\n1. **Existence of Algorithm**: Solvable problems have a corresponding algorithm that can solve them for all inputs, while unsolvable problems do not.\n2. **Halting Behavior**: For solvable problems, a Turing machine will always halt with a result. For unsolvable problems, there are instances where the Turing machine may run indefinitely without producing a result.\n3. **Examples**: Solvable problems include decision problems like primality testing, while unsolvable problems include the Halting Problem and other problems that cannot be resolved by any algorithm.\n\n### Additional Considerations\n- **Enumerable vs. Non-enumerable**: The classification of problems can also be extended to enumerable (recursively enumerable) and non-enumerable problems. A problem is enumerable if there exists a Turing machine that can list all the solutions, even if it cannot decide them. This adds another layer to the understanding of solvable and unsolvable problems.\n- **Complexity**: While solvable problems can vary in complexity (e.g., polynomial vs. exponential time), unsolvable problems are fundamentally limited by their undecidability.\n\nIn summary, the distinction between solvable and unsolvable problems is crucial in computability theory, highlighting the boundaries of what can be computed and the inherent limitations of algorithms.
subject: Computer science
file_name: what-is-the-difference-between-solvable-and-unsolvable-problems-in-computability-theory.md
url: /learn/computer-science/questions/what-is-the-difference-between-solvable-and-unsolvable-problems-in-computability-theory
---

&nbsp;