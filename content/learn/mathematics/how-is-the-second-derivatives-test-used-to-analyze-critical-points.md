---
_schema: default
id: 84815
date: 2024-12-04
title: >-
    How is the second derivatives test used to analyze critical points?
article_title: >-
    How is the second derivatives test used to analyze critical points?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    The second derivative test is a method used to classify critical points of functions of two variables, determining local maxima, minima, or saddle points through analysis of second partial derivatives and the Hessian determinant.
  page_keywords: >-
    second derivative test, critical points, local maxima, local minima, saddle points, partial derivatives, Hessian determinant, multivariable functions, optimization, calculus
author: QuickTakes
question: >-
    How is the second derivatives test used to analyze critical points?
answer: >-
    The second derivative test is a method used to classify critical points of functions of two variables, helping to determine whether these points are local maxima, local minima, or saddle points. Here’s how the test is applied:\n\n1. **Finding Critical Points**: First, you need to find the critical points of the function \(f(x, y)\). This is done by solving the equations given by the first partial derivatives:\n   $$\n   f_x(x, y) = 0 \quad \text{and} \quad f_y(x, y) = 0\n   $$\n   A critical point \((x_0, y_0)\) is where both partial derivatives are zero, indicating that the tangent plane to the surface defined by \(f(x, y)\) is horizontal at that point.\n\n2. **Calculating Second Derivatives**: Next, compute the second partial derivatives at the critical point:\n   - $f_{xx} = \frac{\partial^2 f}{\partial x^2}$\n   - $f_{yy} = \frac{\partial^2 f}{\partial y^2}$\n   - $f_{xy} = \frac{\partial^2 f}{\partial x \partial y}$\n\n3. **Forming the Hessian Determinant**: The Hessian determinant $D$ is then calculated using these second derivatives:\n   $$\n   D = f_{xx}(x_0, y_0) \cdot f_{yy}(x_0, y_0) - (f_{xy}(x_0, y_0))^2\n   $$\n\n4. **Applying the Second Derivative Test**:\n   - If $D > 0$ and \(f_{xx}(x_0, y_0) > 0\), then \(f(x, y)\) has a local minimum at \((x_0, y_0)\).\n   - If $D > 0$ and \(f_{xx}(x_0, y_0) < 0\), then \(f(x, y)\) has a local maximum at \((x_0, y_0)\).\n   - If $D < 0$, then \((x_0, y_0)\) is a saddle point.\n   - If $D = 0$, the test is inconclusive, and further analysis is required.\n\n### Example\nConsider the function \(f(x, y) = 4x^2 + 9y^2 + 8x - 36y + 24\). To apply the second derivative test:\n1. Find the critical points by setting the first partial derivatives to zero.\n2. Calculate the second partial derivatives and the Hessian determinant at the critical points.\n3. Use the conditions outlined above to classify the critical points.\n\nThis systematic approach allows for a clear analysis of the behavior of multivariable functions at critical points, providing insight into their local structure.
subject: Mathematics
file_name: how-is-the-second-derivatives-test-used-to-analyze-critical-points.md
url: /learn/mathematics/questions/how-is-the-second-derivatives-test-used-to-analyze-critical-points
score: -1.0
related_article1:
    id: 84822
    title: >-
        What is the process for evaluating double integrals over general regions?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-the-process-for-evaluating-double-integrals-over-general-regions
related_article2:
    id: 84827
    title: >-
        How are triple integrals used in cylindrical and spherical coordinates?
    subject: Mathematics
    url: /learn/mathematics/questions/how-are-triple-integrals-used-in-cylindrical-and-spherical-coordinates
---

&nbsp;