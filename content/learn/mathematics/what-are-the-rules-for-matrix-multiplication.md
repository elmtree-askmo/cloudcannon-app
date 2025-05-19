---
_schema: default
id: 188856
date: 2025-02-24
title: >-
    What are the rules for matrix multiplication?
article_title: >-
    What are the rules for matrix multiplication?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This content explains the rules governing matrix multiplication, including dimension compatibility, element calculation, the non-commutative and associative properties, the distributive property, and the concept of the identity matrix in linear algebra.
  page_keywords: >-
    matrix multiplication, rules of matrix multiplication, dimension compatibility, element calculation, non-commutative property, associative property, distributive property, identity matrix, linear algebra, matrix operations
author: QuickTakes
question: >-
    What are the rules for matrix multiplication?
answer: >-
    Matrix multiplication is a fundamental operation in linear algebra, and it follows specific rules regarding the dimensions of the matrices involved. Here are the key rules for matrix multiplication:\n\n1. **Dimension Compatibility**: For two matrices $ A $ and $ B $ to be multiplied, the number of columns in the first matrix $ A $ must equal the number of rows in the second matrix $ B $. If $ A $ is an $ m \times n $ matrix and $ B $ is an $ n \times p $ matrix, then the resulting matrix $ C = AB $ will be an $ m \times p $ matrix.\n\n2. **Element Calculation**: The element in the resulting matrix $ C $ at position \( (i, j) \) is calculated by taking the dot product of the $ i $-th row of matrix $ A $ and the $ j $-th column of matrix $ B $. Mathematically, this can be expressed as:\n   $$\n   C_{ij} = \sum_{k=1}^{n} A_{ik} B_{kj}\n   $$\n   where $ n $ is the number of columns in $ A $ (or rows in $ B $).\n\n3. **Non-Commutative Property**: Matrix multiplication is generally not commutative, meaning that $ AB \neq BA $ in most cases. However, it is associative, so \( (AB)C = A(BC) \).\n\n4. **Distributive Property**: Matrix multiplication is distributive over matrix addition, which means that for matrices $ A $, $ B $, and $ C $ of compatible dimensions:\n   $$\n   A(B + C) = AB + AC\n   $$\n\n5. **Identity Matrix**: There exists an identity matrix $ I $ such that for any matrix $ A $ of size $ n \times n $:\n   $$\n   AI = A \quad \text{and} \quad IA = A\n   $$\n   The identity matrix has 1s on the diagonal and 0s elsewhere.\n\nThese rules are essential for performing matrix operations correctly and understanding their implications in various applications, such as solving systems of linear equations, transformations in computer graphics, and more.
subject: Mathematics
file_name: what-are-the-rules-for-matrix-multiplication.md
url: /learn/mathematics/questions/what-are-the-rules-for-matrix-multiplication
score: -1.0

---

&nbsp;