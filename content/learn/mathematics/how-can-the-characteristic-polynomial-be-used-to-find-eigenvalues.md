---
_schema: default
id: 179950
date: 2025-02-19
title: >-
    How can the characteristic polynomial be used to find eigenvalues?
article_title: >-
    How can the characteristic polynomial be used to find eigenvalues?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    The characteristic polynomial is used to find the eigenvalues of a square matrix by calculating the determinant of the matrix subtracted by a scalar multiple of the identity matrix and finding the roots of this polynomial.
  page_keywords: >-
    characteristic polynomial, eigenvalues, square matrix, determinant, roots, linear algebra, diagonalizability, stability analysis, linear transformations
author: QuickTakes
question: >-
    How can the characteristic polynomial be used to find eigenvalues?
answer: >-
    The characteristic polynomial is a fundamental tool in linear algebra for finding the eigenvalues of a square matrix. Here’s a detailed explanation of how it is used:\n\n### Definition of the Characteristic Polynomial\nThe characteristic polynomial of a square matrix $ A $ of size $ n \times n $ is defined as:\n\n$$\np(\lambda) = \det(A - \lambda I)\n$$\n\nwhere $ I $ is the identity matrix of the same size as $ A $, and $ \lambda $ is a scalar variable. The roots of this polynomial are the eigenvalues of the matrix $ A $.\n\n### Process of Finding Eigenvalues\nTo find the eigenvalues using the characteristic polynomial, follow these steps:\n\n1. **Define the Matrix**: Let $ A $ be a square matrix of size $ n \times n $.\n\n2. **Construct the Characteristic Polynomial**: Compute the characteristic polynomial \( p(\lambda) \) by calculating the determinant of $ A - \lambda I $.\n\n3. **Calculate the Determinant**: This involves substituting $ \lambda $ into the matrix $ A - \lambda I $ and calculating the determinant, which will yield a polynomial in $ \lambda $.\n\n4. **Set the Polynomial to Zero**: To find the eigenvalues, set the characteristic polynomial equal to zero:\n   $$\n   p(\lambda) = 0\n   $$\n\n5. **Solve for Roots**: The solutions to this equation (the roots of the polynomial) are the eigenvalues of the matrix $ A $.\n\n### Example\nFor a 2x2 matrix $ A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} $, the characteristic polynomial can be expressed as:\n\n$$\np(\lambda) = \lambda^2 - (a + d)\lambda + (ad - bc)\n$$\n\nBy solving the quadratic equation \( p(\lambda) = 0 \), you can find the two eigenvalues.\n\n### Importance of Eigenvalues\nThe eigenvalues obtained from the characteristic polynomial provide critical insights into the properties of the matrix, such as:\n\n- **Diagonalizability**: A matrix is diagonalizable if it has enough linearly independent eigenvectors, which is often determined by the eigenvalues obtained from the characteristic polynomial. If the characteristic polynomial has distinct roots, the matrix is guaranteed to be diagonalizable.\n\n- **Stability Analysis**: In systems of differential equations, the eigenvalues derived from the characteristic polynomial can indicate the stability of equilibrium points. For instance, if all eigenvalues have negative real parts, the system is stable.\n\nIn summary, the characteristic polynomial is essential for finding eigenvalues, which in turn are crucial for understanding the behavior of linear transformations represented by matrices.
subject: Mathematics
file_name: how-can-the-characteristic-polynomial-be-used-to-find-eigenvalues.md
url: /learn/mathematics/questions/how-can-the-characteristic-polynomial-be-used-to-find-eigenvalues
score: -1.0
related_article1:
    id: 179949
    title: >-
        What is an eigenvalue and how is it related to an eigenvector?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-an-eigenvalue-and-how-is-it-related-to-an-eigenvector
---

&nbsp;