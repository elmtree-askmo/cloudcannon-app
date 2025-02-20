---
_schema: default
id: 30141
date: 2024-11-23
title: >-
    How is the cross product calculated between two vectors?
article_title: >-
    How is the cross product calculated between two vectors?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Physics
  page_description: >-
    This content explains how to calculate the cross product of two vectors in three-dimensional space, detailing the method involving the determinant of a 3x3 matrix and providing interpretations and applications in physics and engineering.
  page_keywords: >-
    cross product, vector product, vectors, three-dimensional space, determinant, 3x3 matrix, unit vectors, components, perpendicular vector, magnitude, angle between vectors, physics, engineering
author: QuickTakes
question: >-
    How is the cross product calculated between two vectors?
answer: >-
    The cross product, also known as the vector product, is a binary operation on two vectors in three-dimensional space that results in another vector that is perpendicular to the plane formed by the original vectors. The cross product is denoted by the symbol \( \times \).\n\nTo calculate the cross product of two vectors \( \vec{A} \) and \( \vec{B} \), you can use the following method involving a determinant of a 3x3 matrix:\n\n1. **Set Up the Matrix**: Create a 3x3 matrix where the first row consists of the unit vectors \( \hat{i}, \hat{j}, \hat{k} \) (representing the x, y, and z axes), and the second and third rows consist of the components of the vectors \( \vec{A} \) and \( \vec{B} \).\n\n   For example, if \( \vec{A} = (A_x, A_y, A_z) \) and \( \vec{B} = (B_x, B_y, B_z) \), the matrix looks like this:\n\n   $$\n   \begin{vmatrix}\n   \hat{i} & \hat{j} & \hat{k} \\\n   A_x & A_y & A_z \\\n   B_x & B_y & B_z\n   \end{vmatrix}\n   $$\n\n2. **Calculate the Determinant**: The cross product \( \vec{A} \times \vec{B} \) can be calculated by finding the determinant of this matrix. The result is given by:\n\n   $$\n   \vec{A} \times \vec{B} = \begin{vmatrix}\n   \hat{i} & \hat{j} & \hat{k} \\\n   A_x & A_y & A_z \\\n   B_x & B_y & B_z\n   \end{vmatrix} = \hat{i}(A_yB_z - A_zB_y) - \hat{j}(A_xB_z - A_zB_x) + \hat{k}(A_xB_y - A_yB_x)\n   $$\n\n   This results in a vector:\n\n   $$\n   \vec{A} \times \vec{B} = (A_yB_z - A_zB_y) \hat{i} - (A_xB_z - A_zB_x) \hat{j} + (A_xB_y - A_yB_x) \hat{k}\n   $$\n\n3. **Interpretation**: The resulting vector \( \vec{A} \times \vec{B} \) is perpendicular to both \( \vec{A} \) and \( \vec{B} \), and its magnitude is given by:\n\n   $$\n   |\vec{A} \times \vec{B}| = |\vec{A}| |\vec{B}| \sin(\theta)\n   $$\n\n   where \( \theta \) is the angle between the two vectors.\n\nThis method provides a systematic way to compute the cross product and is particularly useful in physics and engineering applications where the direction of the resultant vector is significant.
subject: Physics
file_name: how-is-the-cross-product-calculated-between-two-vectors.md
url: /learn/physics/questions/how-is-the-cross-product-calculated-between-two-vectors
score: -1.0
related_article1:
    id: 30138
    title: >-
        What are the common applications of the dot product in various fields?
    subject: Mathematics
    url: /learn/mathematics/questions/what-are-the-common-applications-of-the-dot-product-in-various-fields
---

&nbsp;