---
_schema: default
id: 50884
date: 2024-11-26
title: >-
    What is data leakage and what causes it?
article_title: >-
    What is data leakage and what causes it?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Data leakage in machine learning occurs when the training dataset includes information that should not be available at prediction time, leading to models that do not generalize well. Causes include test data inclusion, temporal leakage, feature engineering errors, data preprocessing mistakes, and leaky variables.
  page_keywords: >-
    data leakage, machine learning, training data, testing data, overfitting, temporal leakage, feature engineering, preprocessing errors, leaky variables, model performance
author: QuickTakes
question: >-
    What is data leakage and what causes it?
answer: >-
    Data leakage in machine learning refers to a situation where the training data inadvertently includes information that would not be available at the time of making predictions. This can lead to models that perform exceptionally well during testing but fail to generalize to real-world scenarios, resulting in poor performance when deployed.\n\n### Causes of Data Leakage\n\n1. **Inadvertent Inclusion of Test Data**: One of the most common causes of data leakage is the accidental inclusion of test data in the training set. This can happen if the data is not properly split into training and testing subsets.\n\n2. **Temporal Leakage**: In time-series data, if future information is used to predict past events, it can lead to leakage. For instance, using data points that occur after the prediction point can skew the model's understanding.\n\n3. **Feature Engineering Mistakes**: Creating features that are derived from the target variable or using information that would not be available at the time of prediction can introduce leakage. For example, if a feature is calculated using the target variable, it can lead to overfitting.\n\n4. **Data Preprocessing Errors**: If preprocessing steps (like normalization or imputation) are applied to the entire dataset before splitting into training and test sets, it can cause leakage. Each dataset should be processed independently to avoid sharing information.\n\n5. **Using Leaky Variables**: Features that contain information about the target variable can lead to leakage. For example, if a feature directly correlates with the outcome being predicted, it can provide the model with an unfair advantage.\n\n### Consequences of Data Leakage\n\nThe primary consequence of data leakage is overfitting, where the model learns patterns that are not generalizable to unseen data. This results in inflated performance metrics during testing, which do not reflect the model's true predictive power in real-world applications. Consequently, models that suffer from data leakage may perform poorly when deployed, as they cannot replicate the conditions under which they were evaluated.\n\nTo mitigate data leakage, it is crucial to ensure that the training and testing datasets are properly separated, and that any preprocessing or feature engineering is done in a way that respects the integrity of the training data.
subject: Computer Science
file_name: what-is-data-leakage-and-what-causes-it.md
url: /learn/computer-science/questions/what-is-data-leakage-and-what-causes-it
score: -1.0
related_article1:
    id: 50867
    title: >-
        What are the key performance metrics for evaluating models?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-key-performance-metrics-for-evaluating-models
related_article2:
    id: 50868
    title: >-
        How is accuracy measured and what does it indicate?
    subject: Computer Science
    url: /learn/computer-science/questions/how-is-accuracy-measured-and-what-does-it-indicate
related_article3:
    id: 50855
    title: >-
        What are the methods for encoding categorical variables?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-methods-for-encoding-categorical-variables
---

&nbsp;