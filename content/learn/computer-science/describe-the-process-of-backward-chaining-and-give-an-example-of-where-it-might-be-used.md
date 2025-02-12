---
_schema: default
id: 161403
date: 2025-01-24
title: Describe the process of backward chaining and give an example of where it might be used.
article_title: Describe the process of backward chaining and give an example of where it might be used.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Backward chaining is a reasoning method in rule-based systems that starts with a specific goal and works backwards to identify necessary conditions. It is often used in medical diagnosis systems to confirm if a patient has a disease by verifying symptoms.
  page_keywords: >-
    backward chaining, reasoning method, inference engines, problem-solving, knowledge base, medical diagnosis, rule-based systems, hypothesis testing, recursive evaluation, deductive reasoning
author: QuickTakes
question: >-
    Describe the process of backward chaining and give an example of where it might be used.
answer: >-
    Backward chaining is a reasoning method used in rule-based systems, particularly in inference engines, where the process begins with a specific goal and works backwards to identify the necessary conditions or rules that must be satisfied to achieve that goal. This approach is efficient for problem-solving because it focuses on what needs to be proven rather than generating all possible conclusions from a set of premises.\n\n### Process of Backward Chaining\n\n1. **Identify the Goal**: Start with a specific goal or hypothesis that you want to prove.\n2. **Check Rules**: Look for rules in the knowledge base that can lead to the goal. Each rule typically has a conclusion and one or more premises.\n3. **Evaluate Premises**: For each rule that can lead to the goal, check if the premises of the rule are satisfied. If a premise is not satisfied, treat it as a new goal.\n4. **Recursive Process**: Repeat the process for each new goal (premise) until either:\n   - All premises are satisfied (the original goal is proven).\n   - You reach a point where no further rules can be applied, leading to failure in proving the goal.\n5. **Backtrack if Necessary**: If a path leads to a dead end (i.e., a premise cannot be satisfied), backtrack to the previous goal and try a different rule or premise.\n\n### Example of Backward Chaining\n\nA practical example of backward chaining can be found in a medical diagnosis system. Suppose the goal is to determine whether a patient has a specific disease, say "Disease X". The system might have the following rules:\n\n1. **Rule 1**: If the patient has symptom A and symptom B, then the patient may have Disease X.\n2. **Rule 2**: If the patient has symptom A, then the patient has a high risk of Disease X.\n3. **Rule 3**: If the patient has symptom B, then the patient has a high risk of Disease X.\n\n**Process**:\n- Start with the goal: "Does the patient have Disease X?"\n- Check Rule 1. The premises are "Has symptom A" and "Has symptom B".\n- If either symptom is missing, treat it as a new goal:\n  - If "Has symptom A" is not satisfied, check Rule 2.\n  - If "Has symptom B" is not satisfied, check Rule 3.\n- Continue this process until all necessary symptoms are confirmed or until it is determined that the patient does not have the disease.\n\nThis method allows the system to efficiently narrow down the necessary conditions for diagnosing the disease, focusing only on relevant symptoms rather than evaluating all possible diseases from the outset.
subject: Computer Science
file_name: describe-the-process-of-backward-chaining-and-give-an-example-of-where-it-might-be-used.md
url: /learn/computer-science/questions/describe-the-process-of-backward-chaining-and-give-an-example-of-where-it-might-be-used
score: -1.0
related_article1:
    id: 161213
    title: What is the role of the inference engine in an expert system, and how does it utilize inference rules?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-role-of-the-inference-engine-in-an-expert-system-and-how-does-it-utilize-inference-rules
related_article2:
    id: 161409
    title: Discuss two disadvantages of expert systems concerning training and costs.
    subject: Computer Science
    url: /learn/computer-science/questions/discuss-two-disadvantages-of-expert-systems-concerning-training-and-costs
related_article3:
    id: 161220
    title: What are the key steps involved in setting up an expert system, particularly in terms of knowledge base and rules base creation?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-key-steps-involved-in-setting-up-an-expert-system-particularly-in-terms-of-knowledge-base-and-rules-base-creation
related_article4:
    id: 161399
    title: Differentiate between factual knowledge and heuristic knowledge in the context of a knowledge base.
    subject: Computer Science
    url: /learn/computer-science/questions/differentiate-between-factual-knowledge-and-heuristic-knowledge-in-the-context-of-a-knowledge-base
related_article5:
    id: 161409
    title: Discuss two disadvantages of expert systems concerning training and costs.
    subject: Computer Science
    url: /learn/computer-science/questions/discuss-two-disadvantages-of-expert-systems-concerning-training-and-costs
---

&nbsp;