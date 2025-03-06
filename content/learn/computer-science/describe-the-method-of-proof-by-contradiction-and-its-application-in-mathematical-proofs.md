---
_schema: default
id: 161100
date: 2025-01-24
title: Describe the method of proof by contradiction and its application in mathematical proofs.
article_title: Describe the method of proof by contradiction and its application in mathematical proofs.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    Proof by contradiction is a method of mathematical reasoning that shows a statement is true by assuming its negation leads to a contradiction. It is widely applicable in various fields such as number theory, geometry, and set theory.
  page_keywords: >-
    proof by contradiction, mathematical proofs, irrational numbers, structure of proof, example of proof, number theory, geometry, set theory, non-constructive proof, logic, contradiction, mathematical reasoning, square root of 2
author: QuickTakes
question: >-
    Describe the method of proof by contradiction and its application in mathematical proofs.
answer: >-
    ### Proof by Contradiction\n\n**Definition**: Proof by contradiction is a method of mathematical proof where one assumes that the statement to be proven is false. By demonstrating that this assumption leads to a contradiction, one concludes that the original statement must be true. This technique is particularly useful when a direct proof is challenging or when the statement is non-constructive.\n\n**Structure**: The typical structure of a proof by contradiction involves the following steps:\n1. Assume the statement $ P $ is false.\n2. From this assumption, derive a logical consequence that leads to a contradiction, often denoted as $ Q $ being false or some other established truth being violated.\n3. Conclude that since assuming $ P $ is false leads to a contradiction, $ P $ must be true.\n\nThis can be formally expressed as:\n- Assume $ P $ is false, leading to a contradiction.\n\n**Example**: A classic example of proof by contradiction is the proof that $ \sqrt{2} $ is not a rational number. The proof proceeds as follows:\n1. Assume $ \sqrt{2} $ is rational, meaning it can be expressed as $ \frac{a}{b} $ where $ a $ and $ b $ are integers with no common factors (i.e., in simplest form).\n2. Squaring both sides gives $ 2 = \frac{a^2}{b^2} $, leading to $ a^2 = 2b^2 $.\n3. This implies that $ a^2 $ is even, and therefore $ a $ must also be even (since the square of an odd number is odd).\n4. Let $ a = 2k $ for some integer $ k $. Substituting back gives \( (2k)^2 = 2b^2 \) or $ 4k^2 = 2b^2 $, leading to $ b^2 = 2k^2 $, which implies $ b $ is also even.\n5. Since both $ a $ and $ b $ are even, they share a common factor of 2, contradicting the assumption that $ \frac{a}{b} $ is in simplest form.\n6. Thus, the assumption that $ \sqrt{2} $ is rational must be false, proving that $ \sqrt{2} $ is irrational.\n\n**Applications**: Proof by contradiction is widely used in various areas of mathematics, including:\n- **Number Theory**: Proving properties of integers, such as the irrationality of certain roots.\n- **Geometry**: Establishing the properties of geometric figures, such as the equality of angles and sides in triangles.\n- **Set Theory**: Demonstrating the existence of certain sets or the cardinality of infinite sets.\n\n**Constructiveness**: It is important to note that proofs by contradiction are generally considered non-constructive. This means that while they establish the truth of a statement, they do not provide a constructive method or example that demonstrates the truth directly. In contrast, direct proofs are typically constructive, providing explicit examples or methods.\n\nIn summary, proof by contradiction is a powerful and widely applicable method in mathematical reasoning, allowing mathematicians to establish the truth of statements by demonstrating the impossibility of their negation.
subject: Computer science
file_name: describe-the-method-of-proof-by-contradiction-and-its-application-in-mathematical-proofs.md
url: /learn/computer-science/questions/describe-the-method-of-proof-by-contradiction-and-its-application-in-mathematical-proofs
---

&nbsp;