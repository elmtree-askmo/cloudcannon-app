---
_schema: default
id: 114882
date: 2024-12-10
title: >-
    What are the steps involved in performing Gaussian elimination?
article_title: >-
    What are the steps involved in performing Gaussian elimination?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This content explains the steps involved in performing Gaussian elimination, a systematic method for solving systems of linear equations, including writing the system in matrix form, performing forward elimination, executing back substitution, and checking for consistency.
  page_keywords: >-
    Gaussian elimination, linear equations, matrix form, augmented matrix, forward elimination, back substitution, row operations, upper triangular form, matrix consistency, solving systems
author: QuickTakes
question: >-
    What are the steps involved in performing Gaussian elimination?
answer: >-
    To perform Gaussian elimination, follow these steps:\n\n1. **Write the System in Matrix Form**: Convert the given system of linear equations into an augmented matrix form $ [A|B] $, where $ A $ is the coefficient matrix and $ B $ is the column matrix of constants. For example, for the system:\n   $$\n   \begin{align*}\n   x + y + z &= 2 \\\n   x + 2y + 3z &= 5 \\\n   2x + 3y + 4z &= 11\n   \end{align*}\n   $$\n   the augmented matrix is:\n   \[\n   \left[ \begin{array}{ccc|c}\n   1 & 1 & 1 & 2 \\\n   1 & 2 & 3 & 5 \\\n   2 & 3 & 4 & 11\n   \end{array} \right]\n   \]\n\n2. **Forward Elimination**: Use elementary row operations to transform the matrix into an upper triangular form. The goal is to create zeros below the leading coefficients (the first non-zero number from the left in a row). The steps include:\n   - Make the leading coefficient of the first row a 1 (if it is not already).\n   - Use this leading 1 to eliminate the entries below it in the same column by replacing each row below with a linear combination of itself and the first row.\n   - Repeat this process for the next leading coefficient in the second row, and so on, until the matrix is in upper triangular form.\n\n3. **Back Substitution**: Once the matrix is in upper triangular form, solve for the variables starting from the last row and moving upwards. This involves substituting the known values back into the equations to find the unknowns.\n\n4. **Check for Consistency**: After performing back substitution, check if the system has a unique solution, infinitely many solutions, or no solution at all. This can be determined by examining the rows of the final matrix.\n\nFor example, if after forward elimination, the matrix looks like:\n\[\n\left[ \begin{array}{ccc|c}\n1 & 1 & 1 & 2 \\\n0 & 1 & 2 & 3 \\\n0 & 0 & 1 & 1\n\end{array} \right]\n\]\nYou would then perform back substitution to find the values of $ z $, $ y $, and $ x $.\n\nThese steps outline the Gaussian elimination process, which is a systematic method for solving systems of linear equations.
subject: Mathematics
file_name: what-are-the-steps-involved-in-performing-gaussian-elimination.md
url: /learn/mathematics/questions/what-are-the-steps-involved-in-performing-gaussian-elimination
score: -1.0

---

&nbsp;