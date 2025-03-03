---
_schema: default
id: 179949
date: 2025-02-19
title: >-
    What is an eigenvalue and how is it related to an eigenvector?
article_title: >-
    What is an eigenvalue and how is it related to an eigenvector?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    An eigenvalue is a scalar associated with a matrix transformation that quantifies the scaling of its corresponding eigenvector, which changes only in scale under the transformation. Understanding eigenvalues and eigenvectors is essential in linear algebra for analyzing matrix properties and transformations.
  page_keywords: >-
    eigenvalue, eigenvector, linear transformation, matrix, characteristic polynomial, scaling, null space, geometric interpretation, diagonalizability, stability
author: QuickTakes
question: >-
    What is an eigenvalue and how is it related to an eigenvector?
answer: >-
    An **eigenvalue** is a scalar that is associated with a linear transformation represented by a matrix $ A $. It quantifies how much the corresponding **eigenvector** is stretched or compressed during the transformation. The relationship between an eigenvalue $ \lambda $ and its corresponding eigenvector $ \mathbf{v} $ is defined by the eigenvalue equation:\n\n$$\nA \mathbf{v} = \lambda \mathbf{v}\n$$\n\nIn this equation:\n- $ A $ is the transformation matrix,\n- $ \mathbf{v} $ is the eigenvector, and\n- $ \lambda $ is the eigenvalue.\n\nAn **eigenvector** is a non-zero vector that, when the linear transformation represented by the matrix $ A $ is applied to it, changes only in scale (i.e., it is stretched or compressed) and not in direction. This means that the output of the transformation is simply the eigenvector scaled by the eigenvalue $ \lambda $.\n\n### Key Points:\n- If $ \lambda > 1 $, the eigenvector is stretched.\n- If $ 0 < \lambda < 1 $, the eigenvector is compressed.\n- If $ \lambda < 0 $, the eigenvector is flipped in direction and scaled.\n\n### Finding Eigenvalues and Eigenvectors:\nTo find eigenvalues, one typically solves the characteristic polynomial given by:\n\n$$\n\det(A - \lambda I) = 0\n$$\n\nwhere $ I $ is the identity matrix. The roots of this polynomial are the eigenvalues. For each eigenvalue, the corresponding eigenvectors can be found by solving the equation:\n\n$$\n(A - \lambda I) \mathbf{v} = 0\n$$\n\nThis process involves determining the null space of the matrix \( (A - \lambda I) \).\n\n### Geometric Interpretation:\nEigenvalues and eigenvectors provide insight into the geometric transformations represented by matrices. For instance, in the context of rotation matrices, while they may not have real eigenvalues or eigenvectors, they still represent transformations that can be analyzed through these concepts.\n\nIn summary, eigenvalues and eigenvectors are fundamental in understanding linear transformations, their effects on vector spaces, and the structure of matrices, including their diagonalizability and stability properties.
subject: Mathematics
file_name: what-is-an-eigenvalue-and-how-is-it-related-to-an-eigenvector.md
url: /learn/mathematics/questions/what-is-an-eigenvalue-and-how-is-it-related-to-an-eigenvector
score: -1.0
related_article1:
    id: 179950
    title: >-
        How can the characteristic polynomial be used to find eigenvalues?
    subject: Mathematics
    url: /learn/mathematics/questions/how-can-the-characteristic-polynomial-be-used-to-find-eigenvalues
---

&nbsp;