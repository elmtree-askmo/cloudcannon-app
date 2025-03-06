---
_schema: default
id: 170782
date: 2025-02-06
title: What are the characteristics of non-deterministic polynomial time?
article_title: What are the characteristics of non-deterministic polynomial time?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content explains the characteristics of non-deterministic polynomial time (NP) in computational theory, including its definition, verification, relationship to P, examples of NP problems, and implications in complexity science.
  page_keywords: >-
    NP, non-deterministic polynomial time, computational theory, complexity classes, verification, decision problems, certificate, P vs NP, Turing machine, NP-Complete, NP-Hard, solving, examples, complexity implications, computational problems, polynomial time
author: QuickTakes
question: >-
    What are the characteristics of non-deterministic polynomial time?
answer: >-
    Non-deterministic polynomial time (NP) is a fundamental concept in computational theory, particularly in the study of complexity classes. Here are the key characteristics of NP:\n\n1. **Definition**: NP is the class of decision problems for which a proposed solution can be verified in polynomial time by a deterministic Turing machine. This means that if you are given a "certificate" or solution to the problem, you can check its correctness efficiently (in polynomial time).\n\n2. **Verification vs. Solving**: While solutions to NP problems can be verified quickly, it is not known whether they can also be found quickly. This distinction raises the famous P vs NP question: Is every problem whose solution can be verified in polynomial time also solvable in polynomial time?\n\n3. **Superset of P**: All problems in the class P (problems solvable in polynomial time by a deterministic Turing machine) are also in NP. However, it is not known if all NP problems are in P. Thus, NP is considered a superset of P.\n\n4. **Non-determinism**: NP problems can be thought of as problems that can be solved by a non-deterministic Turing machine, which can explore multiple possible solutions simultaneously. This hypothetical machine can "guess" a solution and then verify it in polynomial time.\n\n5. **Examples**: Common examples of NP problems include the Sudoku puzzle, the Traveling Salesman Problem (TSP), and the Satisfiability Problem (SAT). These problems are easy to verify but potentially hard to solve.\n\n6. **NP-Complete and NP-Hard**: Within NP, there are special categories:\n   - **NP-Complete**: These are the hardest problems in NP. If any NP-Complete problem can be solved in polynomial time, then all problems in NP can also be solved in polynomial time (P = NP).\n   - **NP-Hard**: These problems are at least as hard as NP-Complete problems but are not necessarily in NP, meaning their solutions may not be verifiable in polynomial time.\n\n7. **Complexity Implications**: The existence of NP problems suggests that there are many computational problems for which finding a solution is significantly more difficult than verifying one. This has profound implications in fields such as cryptography, optimization, and algorithm design.\n\nIn summary, NP is characterized by problems that can be verified in polynomial time, the distinction between verification and solving, and its relationship with P and NP-Complete problems. The exploration of NP continues to be a central topic in theoretical computer science.
subject: Computer science
file_name: what-are-the-characteristics-of-nondeterministic-polynomial-time.md
url: /learn/computer-science/questions/what-are-the-characteristics-of-nondeterministic-polynomial-time
---

&nbsp;