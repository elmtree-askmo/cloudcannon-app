---
_schema: default
id: 104652
date: 2024-12-08
title: >-
    How is matrix-vector multiplication carried out?
article_title: >-
    How is matrix-vector multiplication carried out?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    A detailed explanation of how matrix-vector multiplication is performed, including definitions, conditions, computation steps, interpretations, and a concrete example.
  page_keywords: >-
    matrix-vector multiplication, linear algebra, matrix, vector, dot product, linear combination, dimensions, entry calculation, example, transformation
author: QuickTakes
question: >-
    How is matrix-vector multiplication carried out?
answer: >-
    Matrix-vector multiplication is a fundamental operation in linear algebra that involves multiplying a matrix by a vector to produce a new vector. Here’s how it is carried out:\n\n1. **Definition**: Let $ A $ be an $ m \times n $ matrix and $ \mathbf{x} $ be an $ n \times 1 $ column vector. The product $ A\mathbf{x} $ results in an $ m \times 1 $ column vector.\n\n2. **Conditions**: For the multiplication to be defined, the number of columns in the matrix $ A $ must equal the number of rows in the vector $ \mathbf{x} $. This means that if $ A $ has dimensions $ m \times n $, then $ \mathbf{x} $ must have $ n $ rows.\n\n3. **Computation**: The matrix-vector product can be computed as follows:\n   - Each entry of the resulting vector is calculated as the dot product of the corresponding row of the matrix $ A $ and the vector $ \mathbf{x} $.\n   - Specifically, the $ i $-th entry of the resulting vector $ \mathbf{b} = A\mathbf{x} $ is given by:\n   $$\n   b_i = \sum_{j=1}^{n} a_{ij} x_j\n   $$\n   where $ a_{ij} $ are the elements of the matrix $ A $ and $ x_j $ are the elements of the vector $ \mathbf{x} $.\n\n4. **Interpretation**: Another way to understand matrix-vector multiplication is to view it as a linear combination of the columns of the matrix $ A $, where the coefficients are the entries of the vector $ \mathbf{x} $. This means that the resulting vector is a weighted sum of the columns of $ A $.\n\n5. **Example**: For a concrete example, consider the matrix:\n   $$\n   A = \begin{pmatrix}\n   1 & 2 \\\n   3 & 4 \\\n   \end{pmatrix}\n   $$\n   and the vector:\n   $$\n   \mathbf{x} = \begin{pmatrix}\n   5 \\\n   6 \\\n   \end{pmatrix}\n   $$\n   The product $ A\mathbf{x} $ is calculated as:\n   $$\n   A\mathbf{x} = \begin{pmatrix}\n   1 & 2 \\\n   3 & 4 \\\n   \end{pmatrix} \begin{pmatrix}\n   5 \\\n   6 \\\n   \end{pmatrix} = \begin{pmatrix}\n   1 \cdot 5 + 2 \cdot 6 \\\n   3 \cdot 5 + 4 \cdot 6 \\\n   \end{pmatrix} = \begin{pmatrix}\n   17 \\\n   39 \\\n   \end{pmatrix}\n   $$\n\nIn summary, matrix-vector multiplication is a systematic process that transforms a vector using the linear relationships defined by the matrix, resulting in a new vector. This operation is widely used in various applications, including solving systems of linear equations and representing linear transformations.
subject: Mathematics
file_name: how-is-matrixvector-multiplication-carried-out.md
url: /learn/mathematics/questions/how-is-matrixvector-multiplication-carried-out
score: -1.0
related_article1:
    id: 104647
    title: >-
        What are the different methods to solve systems of linear equations?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-different-methods-to-solve-systems-of-linear-equations
related_article2:
    id: 104661
    title: >-
        How are the kernel and image of a linear transformation defined?
    subject: Mathematics
    url: /learn/mathematics/questions/how-are-the-kernel-and-image-of-a-linear-transformation-defined
related_article3:
    id: 104664
    title: >-
        What is the process of orthogonal diagonalization?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-the-process-of-orthogonal-diagonalization
related_article4:
    id: 104663
    title: >-
        How is orthogonality defined in inner product spaces?
    subject: Mathematics
    url: /learn/mathematics/questions/how-is-orthogonality-defined-in-inner-product-spaces
related_article5:
    id: 104649
    title: >-
        What are the elementary row operations used in matrix manipulation?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-elementary-row-operations-used-in-matrix-manipulation
---

&nbsp;