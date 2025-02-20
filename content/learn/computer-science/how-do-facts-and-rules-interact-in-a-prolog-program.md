---
_schema: default
id: 27737
date: 2024-11-23
title: >-
    How do facts and rules interact in a Prolog program?
article_title: >-
    How do facts and rules interact in a Prolog program?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains how facts and rules interact in a Prolog program, detailing their definitions, interactions, and how Prolog processes queries through logical reasoning and backtracking.
  page_keywords: >-
    Prolog, facts, rules, knowledge base, logical reasoning, query resolution, unification, backtracking, parent_of, sibling_of, programming, logic programming
author: QuickTakes
question: >-
    How do facts and rules interact in a Prolog program?
answer: >-
    In a Prolog program, facts and rules interact to form a knowledge base that allows for logical reasoning and query resolution. Here’s a detailed explanation of how they work together:\n\n### Facts\nFacts are the basic assertions about the world that are considered true within the context of the Prolog knowledge base. They are typically written in lowercase and end with a period. For example, a fact might state that "apple is a fruit" as follows:\n\n```prolog\nfruit(apple).\n```\n\nThis fact indicates that the predicate `fruit` holds true for the constant `apple`.\n\n### Rules\nRules are more complex statements that define relationships between facts. They consist of a head and a body, where the head is a conclusion that can be drawn if the conditions specified in the body are met. Rules are written in the form of implications. For example:\n\n```prolog\nis_fruit(X) :- fruit(X).\n```\n\nThis rule states that `X` is a fruit if `X` is a fruit according to the facts in the knowledge base. The `:-` operator can be read as "if," indicating that the head can be inferred from the body.\n\n### Interaction Between Facts and Rules\nWhen a query is made, Prolog uses both facts and rules to attempt to prove the query true. The interaction occurs through a process called unification, where Prolog tries to match the query with the facts and rules in the knowledge base.\n\nFor instance, if we query:\n\n```prolog\n?- is_fruit(apple).\n```\n\nProlog will first check the rules to see if it can derive `is_fruit(apple)` from the existing facts. It finds the rule `is_fruit(X) :- fruit(X)` and attempts to unify `X` with `apple`. Since `fruit(apple)` is a fact in the knowledge base, Prolog concludes that the query is true.\n\n### Query Resolution\nQueries in Prolog are processed using a top-down approach, where Prolog searches through the knowledge base to find a match for the query. If it encounters a rule, it will recursively check the body of the rule to see if the conditions can be satisfied by the existing facts or other rules. This process continues until either a match is found or all possibilities are exhausted.\n\n### Backtracking\nIf Prolog cannot find a solution for a query, it employs a mechanism called backtracking. This means that if a certain path in the search does not lead to a solution, Prolog will backtrack to the last decision point and try a different path. This allows Prolog to explore multiple possibilities and derive conclusions based on the available facts and rules.\n\n### Example Walkthrough\nConsider the following facts and rules:\n\n```prolog\nparent_of(jane, mary).\nparent_of(john, mary).\nsibling_of(X, Y) :- parent_of(Z, X), parent_of(Z, Y), X \= Y.\n```\n\nIf we query:\n\n```prolog\n?- sibling_of(mary, john).\n```\n\nProlog will:\n1. Look for the rule `sibling_of(X, Y)`.\n2. Substitute `X` with `mary` and `Y` with `john`.\n3. Check if there exists a `Z` such that both `parent_of(Z, mary)` and `parent_of(Z, john)` are true.\n4. It finds that `jane` and `john` are both parents of `mary`, thus concluding that `mary` and `john` are siblings.\n\nIn summary, facts provide the foundational truths, while rules allow for the derivation of new information based on those truths. Together, they enable Prolog to answer queries through logical reasoning and backtracking.
subject: Computer Science
file_name: how-do-facts-and-rules-interact-in-a-prolog-program.md
url: /learn/computer-science/questions/how-do-facts-and-rules-interact-in-a-prolog-program
score: -1.0
related_article1:
    id: 27750
    title: >-
        What are some real-world applications of Prolog?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-some-realworld-applications-of-prolog
---

&nbsp;