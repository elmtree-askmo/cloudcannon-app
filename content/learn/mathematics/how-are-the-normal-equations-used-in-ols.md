---
_schema: default
id: 135359
date: 2024-12-18
title: >-
    How are the normal equations used in OLS?
article_title: >-
    How are the normal equations used in OLS?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Mathematics
  page_description: >-
    This content explains how normal equations are used in Ordinary Least Squares (OLS) regression to estimate parameters of a linear regression model by minimizing the sum of squared residuals, including derivation, matrix formulation, and applications.
  page_keywords: >-
    Ordinary Least Squares, OLS, normal equations, linear regression, parameters estimation, sum of squared residuals, cost function, matrix formulation, multiple regression, coefficients, computational methods
author: QuickTakes
question: >-
    How are the normal equations used in OLS?
answer: >-
    In Ordinary Least Squares (OLS) regression, the normal equations are a fundamental tool used to estimate the parameters of a linear regression model. The normal equations arise from the principle of minimizing the sum of squared residuals, which is the difference between the observed values and the values predicted by the linear model.\n\n### Derivation of Normal Equations\n\nFor a simple linear regression model, the relationship can be expressed as:\n\n$$\ny = \beta_0 + \beta_1 x + \epsilon\n$$\n\nwhere $y$ is the dependent variable, $x$ is the independent variable, $\beta_0$ and $\beta_1$ are the coefficients to be estimated, and $\epsilon$ is the error term.\n\nTo find the optimal values of $\beta_0$ and $\beta_1$, we minimize the cost function, which is the sum of squared errors:\n\n$$\nS(\beta_0, \beta_1) = \sum_{i=1}^{n} (y_i - (\beta_0 + \beta_1 x_i))^2\n$$\n\nTaking the partial derivatives of $S$ with respect to $\beta_0$ and $\beta_1$ and setting them to zero gives us the normal equations:\n\n1. For $\beta_0$:\n   $$\n   \frac{\partial S}{\partial \beta_0} = -2 \sum_{i=1}^{n} (y_i - (\beta_0 + \beta_1 x_i)) = 0\n   $$\n\n2. For $\beta_1$:\n   $$\n   \frac{\partial S}{\partial \beta_1} = -2 \sum_{i=1}^{n} x_i (y_i - (\beta_0 + \beta_1 x_i)) = 0\n   $$\n\nThese equations can be solved simultaneously to find the estimates of $\beta_0$ and $\beta_1$.\n\n### Matrix Formulation\n\nIn the case of multiple regression, where there are multiple independent variables, the normal equations can be expressed in matrix form. If we let $X$ be the matrix of independent variables (including a column of ones for the intercept), $y$ be the vector of observed values, and $\beta$ be the vector of coefficients, the normal equations can be written as:\n\n$$\nX^T X \beta = X^T y\n$$\n\nHere, $X^T$ is the transpose of the matrix $X$. The solution for $\beta$ can be obtained by rearranging this equation:\n\n$$\n\beta = (X^T X)^{-1} X^T y\n$$\n\nThis formula provides a closed-form solution for the coefficients in the linear regression model.\n\n### Applications and Limitations\n\nThe normal equations are particularly useful for small datasets, as they provide a direct method to compute the coefficients. However, for large datasets, the computation of the inverse of $X^T X$ can be computationally intensive and may lead to numerical instability. In such cases, iterative methods like gradient descent may be preferred.\n\nIn summary, the normal equations are a crucial aspect of OLS regression, allowing for the efficient estimation of model parameters by minimizing the sum of squared errors.
subject: Mathematics
file_name: how-are-the-normal-equations-used-in-ols.md
url: /learn/mathematics/questions/how-are-the-normal-equations-used-in-ols
score: -1.0
related_article1:
    id: 135361
    title: >-
        How is the measure of fit determined in a linear regression model?
    subject: Mathematics
    url: /learn/mathematics/questions/how-is-the-measure-of-fit-determined-in-a-linear-regression-model
related_article2:
    id: 135373
    title: >-
        What is Bessel’s correction and why is it used in multivariate regression?
    subject: Economics
    url: /learn/economics/questions/what-is-bessels-correction-and-why-is-it-used-in-multivariate-regression
related_article3:
    id: 135365
    title: >-
        How is the consistency of an estimator evaluated?
    subject: Economics
    url: /learn/economics/questions/how-is-the-consistency-of-an-estimator-evaluated
related_article4:
    id: 135353
    title: >-
        What is the significance of expectation in probability theory?
    subject: Mathematics
    url: /learn/mathematics/questions/what-is-the-significance-of-expectation-in-probability-theory
related_article5:
    id: 135360
    title: >-
        What are the key results of OLS in linear regression?
    subject: Economics
    url: /learn/economics/questions/what-are-the-key-results-of-ols-in-linear-regression
---

&nbsp;